// src/app.js
require('dotenv').config(); 
const express = require('express');
const User = require('./models/User'); 
const Token = require('./models/Token');
const authRoutes = require('./routes/authRoutes'); 
const config = require('./config/env');
const sequelize = require('./config/database');
const healthRoutes = require('./routes/healthRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sincronizar base de datos y arrancar servidor
const PORT = config.port || 3000;
const URL= config.url || 'http://localhost';

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos conectada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${URL}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err);
  });

module.exports = app;
