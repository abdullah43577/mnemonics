import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const { PORT } = process.env;
import router from './routes/routes';
import { connectDB } from './config/connectDB';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));

// routes
app.use(router);
