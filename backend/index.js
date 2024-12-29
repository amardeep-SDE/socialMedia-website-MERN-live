import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Hello World', success: true });
})

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.listen(3000, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});