import express from 'express';
import cors from 'cors';
import env from './env';

const app = express();

app.use(express.json());

app.use(cors({
    origin: env.CORS
}));

export default app;