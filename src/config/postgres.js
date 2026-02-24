import { Pool } from 'pg';
import { env } from './env.js';

const { Pool } = pg;
const pool = new Pool({
    connectionString: env.url_postgres
});
async function createTables() {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);
    } catch (error) {
        console.error(error);
    } finally {
        client.release();
    }
}
