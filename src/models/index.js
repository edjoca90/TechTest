// src/models/index.js
import sequelize from '../config/database.js';
import TokenModel from './Token.js';
import UserModel from './User.js';

// Inicializar modelos
const User = UserModel(sequelize);
const Token = TokenModel(sequelize);

// Exportar modelos y la instancia de Sequelize
export { User, Token, sequelize };
