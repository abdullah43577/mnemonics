import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
const PORT = process.env.PORT;
const { DB_PASS } = process.env;
import router from './routes/routes';

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbURI = `mongodb+srv://officialayo540:${DB_PASS}@mnemonicscluster.x0keyqz.mongodb.net/mnemonics_user_db`;

(async function () {
  try {
    await mongoose.connect(dbURI);
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
})();

// routes
app.use(router);
