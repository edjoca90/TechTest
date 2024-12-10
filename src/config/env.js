// src/config/env.js
const requiredVars = ['PORT', 'DB_HOST', 'DB_NAME', 'DB_USER',  'JWT_SECRET'];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`La variable de entorno ${key} no está configurada`);
  }
});

module.exports = {
  port: process.env.PORT,
  url: process.env.URL,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD || '',
  jwtSecret: process.env.JWT_SECRET,
};
