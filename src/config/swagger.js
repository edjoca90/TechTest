// src/config/swagger.js
const swaggerAutogen = require('swagger-autogen')();
const doc = {
  info: {
    title: 'API Documentation',
    description: 'Documentación generada automáticamente con Swagger',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    { name: 'Auth', description: 'Endpoints de Autenticación' },
    { name: 'Health', description: 'Monitoreo del servidor' },
  ],
};
const outputFile = '../../swagger-output.json'; // Archivo de salida
const endpointsFiles = ['./src/app.js']; // Archivo raíz con las rutas
swaggerAutogen(outputFile, endpointsFiles, doc);
