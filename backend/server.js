import express from 'express';
import dotenv from 'dotenv';

import authRoutes from '../backend/routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDb.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
    connectMongoDB();
})