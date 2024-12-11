// src/routes/healthRoutes.js
const express = require('express');
const sequelize = require('../config/database'); // Conexión de Sequelize

const router = express.Router();

// Endpoint Health Check
router.get('/', async (req, res) => {
  try {
    // Verificar estado del servidor
    const dbStatus = await sequelize.authenticate();
    res.status(200).json({
      status: 'OK',
      database: 'Connected',
      timestamp: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      status: 'FAIL',
      database: 'Disconnected',
      error: error.message,
      timestamp: new Date(),
    });
  }
});

module.exports = router;
