import { createTables } from './config/postgres.js';
import app from './app.js';
import { env } from './config/env.js';

try{
    console.log('Iniciando servicios...');
    await createTables();
    app.listen(env.port, () => {
        console.log('Server running on port ' + env.port);
    });
} catch (error) {
    console.error(error);
}