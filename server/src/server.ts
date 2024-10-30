import express from 'express';
import cors from 'cors';

import connectDB from './db';
import clothesRoutes from './routes/clothes.routes';

import { APP_URL, PORT } from './constants/env';

const app = express();

app.use(cors({
    origin: APP_URL
}));

app.use(express.json());

connectDB();

app.use('/clothes', clothesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
