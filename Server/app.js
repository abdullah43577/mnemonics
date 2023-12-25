require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/routes');
const PORT = process.env.PORT;
const { DB_PASS } = process.env;

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dbURI = `mongodb+srv://officialayo540:${DB_PASS}@mnemonicscluster.x0keyqz.mongodb.net/mnemonics_user_db`;

(async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
})();

// routes
app.use(router);
