const nodemailer = require('nodemailer');
const { GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;

let config = {
  service: 'gmail',
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
};

let transporter = nodemailer.createTransport(config);

module.exports = {
  transporter,
};
