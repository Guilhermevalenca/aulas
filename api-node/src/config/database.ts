import { Sequelize } from 'sequelize';
import env from './env';

export default new Sequelize (
    env.DB_NAME ?? 'postgres',
    env.DB_USER ?? 'postgres', 
    env.DB_PASSWORD ?? 'postgres', 
    {
        host: env.DB_HOST ?? 'localhost',
        dialect: 'postgres',
    }
);