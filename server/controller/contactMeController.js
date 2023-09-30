const logger = require('../logger');
const {
  StatusCodes: { OK },
} = require('http-status-codes');

const sendContactInfo = (req, res) => {
  logger.info('contact me api called');
  res.send({
    message: 'Email send success',
    status: 'success',
    statusCode: OK,
    data: null,
  });
};

module.exports = { sendContactInfo };
