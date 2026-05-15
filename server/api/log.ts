import { sendTelegramMessage } from './../services/telegramService';
import db from '../utils/db'
import { getRequestIP, getRequestHeader, isMethod, readBody } from 'h3'

export default defineEventHandler(async (event) => {
    if (isMethod(event, 'POST')) {
        try {
            const ip =
                (event.node.req.headers['cf-connecting-ip'] as string) ||
                getRequestIP(event, { xForwardedFor: true }) ||
                'Unknown'

            const action = 'Visit'

            const userAgent =
                getRequestHeader(event, 'user-agent') || 'Unknown'

            const device = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop'

            const body = await readBody(event).catch(() => ({}))
            const geo = normalizeGeo(body?.geo)

            await db.query(
                `INSERT INTO action_log (action, ip, device, agent, geo)
                VALUES ($1, $2, $3, $4, $5)`,
                [
                    action,
                    ip,
                    device,
                    userAgent,
                    geo ? JSON.stringify(geo) : null
                ]
            )

            await sendMessage(ip, device, userAgent, geo)

            return { ok: true }
        } catch (err) {
            console.error(err)
            return { ok: false }
        }
    }

    if (isMethod(event, 'GET')) {
        try {
            const logs = await db.query(
                'SELECT * FROM action_log ORDER BY timestamp DESC'
            )
            return { logs }
        } catch (err) {
            console.error(err)
            return { logs: [] }
        }
    }

    return { error: 'Method not allowed' }
})

const normalizeNumber = (value: unknown) => {
    return typeof value === 'number' && Number.isFinite(value) ? value : null
}

const normalizeGeo = (geo: unknown) => {
    if (!geo || typeof geo !== 'object') return null

    const location = geo as Record<string, unknown>
    const latitude = normalizeNumber(location.latitude)
    const longitude = normalizeNumber(location.longitude)

    if (latitude === null || longitude === null) return null

    return {
        latitude,
        longitude,
        accuracy: normalizeNumber(location.accuracy),
        altitude: normalizeNumber(location.altitude),
        altitudeAccuracy: normalizeNumber(location.altitudeAccuracy),
        heading: normalizeNumber(location.heading),
        speed: normalizeNumber(location.speed),
        timestamp: normalizeNumber(location.timestamp)
    }
}

const sendMessage = async (ip: string, device: string, userAgent: string, geo: any) => {
    const message = `
🚨 New Visitor Detected

🌐 IP Address: ${ip}
💻 Device: ${device}
🧭 User Agent: ${userAgent}

📍 Geo Information:
${geo ? JSON.stringify(geo, null, 2) : 'Unknown'}

🕒 Time: ${new Date().toLocaleString()}
`.trim()

    await sendTelegramMessage(message)
}
