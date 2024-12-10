// src/models/User.js
const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

  User.init({
    user_id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
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
  module.exports= User;
/*
import { DataTypes, Model } from 'sequelize';
import { hash } from 'bcrypt';
import sequelize from '../config/database.js'; 


class User extends Model {
 
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Esto es necesario para conectar el modelo con la instancia de Sequelize
    modelName: 'User',
    tableName: 'users',
  }
);

// Antes de guardar, hashear la contraseña
User.beforeCreate(async (user) => {
  user.password = await hash(user.password, 10);
});

export default User;
*/