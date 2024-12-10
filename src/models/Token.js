// src/models/Token.js
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js'; 
import User from './User.js'
class Token extends Model {}
 
Token.init(
  {
    token_id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },    
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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