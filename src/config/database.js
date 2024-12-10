// src/config/database.js
const { Sequelize } = require('sequelize');
const config = require('./env');

const dbHost=config.dbHost || 'localhost';
const db_name= config.dbName|| 'techTestDb';
const db_user= config.dbUser;
const db_password= config.dbPassword || '';


const sequelize = new Sequelize(db_name, db_user, '', {
  host: dbHost,
  dialect: 'mysql',
  logging: false, // Desactiva logs de SQL
});

module.exports = sequelize;
