import db from '../utils/db'
import { getRequestIP, getRequestHeader, isMethod } from 'h3'

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

            let geo = null

            if (ip !== 'Unknown') {
                geo = await getLocationByIp(ip)
            }

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

const getLocationByIp = async (ip: string) => {
    try {
        const res: any = await $fetch(`https://ipapi.co/${ip}/json/`)

        if (!res || res.error) return null

        return {
            country: res.country_name,
            countryCode: res.country,
            city: res.city,
            region: res.region,
            latitude: res.latitude,
            longitude: res.longitude
        }
    } catch {
        return null
    }
}