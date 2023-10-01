require('dotenv').config();

const swaggerAutogen = require('swagger-autogen')();
const swaggerOptions = require('./config/swaggerAutogenConfig');
const path = require('path');

const { ENVIRONMENT } = process.env;
const outputFile = path.resolve(__dirname, './apiDoc.json');
const endpointsFiles = [path.resolve(__dirname, './router/*.js')];
const customOptions = {
  info: {
    title: 'API Document',
    version: '1.0.0',
    description: 'API document in JSON format',
  },
  host: '',
  basePath: '/',

  produces: ['application/json'],
  schemes: ['http', 'https'],
  ...swaggerOptions,
};

const generateSwagger = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, customOptions);
};

if (ENVIRONMENT !== 'production') generateSwagger();
