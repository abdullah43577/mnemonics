import 'dotenv/config';
import mongoose from 'mongoose';
const { DB_PASS } = process.env;

export const connectDB = async function () {
  const dbURI = `mongodb+srv://officialayo540:${DB_PASS}@mnemonicscluster.x0keyqz.mongodb.net/mnemonics_user_db`;
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('mongodb not connected', err);
  }
};
