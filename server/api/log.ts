import db from '../utils/db';
export default defineEventHandler(async (event) => {
    const ip = getRequestIP(event, { xForwardedFor: true }) || 'Unknown';
    if (isMethod(event, 'POST')) {
        const body = await readBody(event);
        const { action, device, agent } = body;
        await db.query('INSERT INTO action_log (action, ip, device, agent) VALUES ($1, $2, $3, $4)', [action, ip, device, agent]);
        return { ok: true };
    }
    if (isMethod(event, 'GET')) {
        const logs = await db.query('SELECT * FROM action_log ORDER BY timestamp DESC');
        return { logs };
    }
});