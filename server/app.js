// const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const router = require('./router/contactMeRouter');

const { PORT } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: 'https://portfolio-vishalkrsoni.web.app/' }));

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/`);
});
