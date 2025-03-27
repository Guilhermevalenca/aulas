import { Sequelize } from 'sequelize';
import env from './env';

const database = new Sequelize (
    env.DB_NAME ?? 'postgres',
    env.DB_USER ?? 'postgres', 
    env.DB_PASSWORD ?? 'postgres', 
    {
        host: env.DB_HOST ?? 'localhost',
        dialect: 'postgres',
    }
);

(async () => {
    try {
        await database.authenticate({
            logging: false
        });
        await database.sync({
            logging: false,
        });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to the database:', error);
    }
})();

export default database;