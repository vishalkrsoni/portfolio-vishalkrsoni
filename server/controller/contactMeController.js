const logger = require('../logger');
const { transporter } = require('../config/mailerConfig');
const { mailOptions } = require('../config/mailOptions');

const { GMAIL_EMAIL, GMAIL_EMAIL_RECIPIENT } = process.env;

const {
  StatusCodes: { OK, BAD_REQUEST, INTERNAL_SERVER_ERROR },
} = require('http-status-codes');

const sendContactInfo = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(BAD_REQUEST).json({
        message: 'Name, email, and message are required fields',
        status: 'error',
        statusCode: BAD_REQUEST,
      });
    }

    const emailRegex =
      /^(?=.{1,50}$)[a-zA-Z0-9+]+(\.[a-zA-Z0-9]+)*@[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,}){1}(?!\.)$/;

    if (!emailRegex.test(email)) {
      return res.status(BAD_REQUEST).json({
        message: 'Invalid email format',
        status: 'error',
        statusCode: BAD_REQUEST,
      });
    }

    logger.info('Contact me API called');

    const mailResponse = await transporter.sendMail(
      mailOptions(GMAIL_EMAIL, GMAIL_EMAIL_RECIPIENT, name, email, message)
    );

    if (mailResponse) {
      return res.status(OK).json({
        message: 'Email send successfully',
        status: 'success',
        statusCode: OK,
        data: null,
      });
    } else {
      return res.status(BAD_REQUEST).json({
        message: 'Error sending email',
        status: 'success',
        statusCode: BAD_REQUEST,
        data: null,
      });
    }
  } catch (error) {
    logger.error('Email sending failed', error);

    return res.status(INTERNAL_SERVER_ERROR).json({
      message: 'Email send failed',
      status: 'error',
      statusCode: INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

module.exports = { sendContactInfo };
