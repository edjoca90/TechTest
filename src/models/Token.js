// src/models/Token.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js'; 
import User from './User.js'
class Token extends Model {}
 
Token.init(
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,        // Instancia de Sequelize
    modelName: 'Token', // Nombre del modelo
    tableName: 'tokens', // Nombre de la tabla
  }
);

// Relación entre Token y User
Token.belongsTo(User, {
  foreignKey: 'userId',  // Clave foránea en el modelo Token
  as: 'user',            // Alias para la relación
});

export default Token;