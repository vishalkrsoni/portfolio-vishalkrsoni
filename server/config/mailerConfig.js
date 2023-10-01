const nodemailer = require('nodemailer');
const { NODEMAILER_SERVICE, GMAIL_EMAIL, GMAIL_PASSWORD } = process.env;

let config = {
  service: NODEMAILER_SERVICE,
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PASSWORD,
  },
};

let transporter = nodemailer.createTransport(config);

module.exports = {
  transporter,
};
