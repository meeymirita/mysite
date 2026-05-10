import express from 'express';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.DOMAIN_URL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));


app.use('/user', userRoutes);


export default app;