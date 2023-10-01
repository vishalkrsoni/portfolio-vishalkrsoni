const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API Document',
      version: '1.0.0',
      description: 'Portfolio API documentation ',
    },
    basePath: '/',
    host: '',

    produces: ['application/json'],
    schemes: ['http', 'https'],
  },
  basedir: __dirname,
  files: ['../router/*.js'],
  exposeModels: true,
  exposeResponses: true,
};

module.exports = swaggerOptions;
