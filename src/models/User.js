// src/models/User.js
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
