// src/models/index.js
import sequelize from '../config/database.js';
import TokenModel from './Token.js';
import UserModel from './User.js';
const User = UserModel(sequelize);
const Token = TokenModel(sequelize);
export { User, Token, sequelize };
