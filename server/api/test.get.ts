import db from '../utils/db';
export default defineEventHandler(async (event) => {
  const result = await db.query('SELECT NOW()');
  return { time: result };
});