import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

import authRoutes from '../backend/routes/auth.routes.js';
import userRoutes from '../backend/routes/user.routes.js';
import connectMongoDB from './db/connectMongoDb.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
cloudinary.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);

app.listen(PORT,()=>{
    console.log(`server is running in http://localhost:${PORT}`);
    connectMongoDB();
})