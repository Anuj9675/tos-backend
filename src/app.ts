import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import aboutRoutes from './routes/aboutRoutes';
import careerRoutes from './routes/careerRoutes';
import faqRoutes from './routes/faqRoutes';
import serviceRoutes from './routes/serviceRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/api/about', aboutRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/services', serviceRoutes);

export default app;
