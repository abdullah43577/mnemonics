require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/routes');
const PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
