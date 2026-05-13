import db from '../utils/db';
export default defineEventHandler(async (event) => {
    if (isMethod(event, 'POST')) {
        const ip = await event.node.req.headers['cf-connecting-ip'] ||
            getRequestIP(event, { xForwardedFor: true }) ||
            'Unknown'
        const action = "Visit";
        const userAgent = event.req.headers['user-agent'] || 'Unknown';
        const device = /mobile/i.test(userAgent) ? 'Mobile' : 'Desktop';
        const agent = userAgent;
        const geo = await getLocationByIp(ip);
        const safeGeo = geo ?? null;
        await db.query(
            `INSERT INTO action_log (action, ip, device, agent, geo) VALUES ($1, $2, $3, $4, $5)`,
            [action, ip, device, agent, safeGeo]
        )
        return { ok: true };
    }
    if (isMethod(event, 'GET')) {
        const logs = await db.query('SELECT * FROM action_log ORDER BY timestamp DESC');
        return { logs };
    }
});

const getLocationByIp = async (ip: string) => {
    try {
        const response = await $fetch(`https://ipapi.co/${ip}/json/`)
        console.log('Location for IP', ip, response)
        return response
    } catch (err) {
        console.error('Failed to get location for IP:', ip, err)
        return null
    }
}