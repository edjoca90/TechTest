// src/models/User.js
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const { hash } = require('bcrypt');

class User extends Model {}

  User.init({
    user_id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize, // Esto es necesario para conectar el modelo con la instancia de Sequelize
    modelName: 'User',
    tableName: 'users',
  });
  User.beforeCreate(async (user) => {
    user.password = await hash(user.password, 10);
  });
  module.exports= User;