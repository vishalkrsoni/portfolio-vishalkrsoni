const { Router } = require('express');
const contactRouter = Router();
const {
  StatusCodes: { METHOD_NOT_ALLOWED },
} = require('http-status-codes');

const { sendContactInfo } = require('../controller/contactMeController');

contactRouter.post('/contact', sendContactInfo).all('/contact', (req, res) => {
  res.status(METHOD_NOT_ALLOWED).json({
    message: req.method + ' Method Not Allowed',
    statusCode: METHOD_NOT_ALLOWED,
    status: 'error',
    data: null,
  });
});

module.exports = contactRouter;
