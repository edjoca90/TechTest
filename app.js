// src/app.js
require('dotenv').config(); 
const express = require('express');
const sequelize = require('./config/database'); // Configuración de Sequelize
const User = require('./models/User'); // Modelo User
const Token = require('./models/Token'); // Modelo Token
const authRoutes = require('./routes/authRoutes'); // Rutas de autenticación
const config = require('./config/env');


const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Sincronizar base de datos y arrancar servidor
const PORT = process.env.PORT || 3000;
const URL= process.env.URL || 'http://localhost';

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en ${URL}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err);
  });

module.exports = app;
