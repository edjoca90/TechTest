// src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// Registro de usuario

const register = async (req, res) => {
  await User.sync();
  const { user_name, user_email, password } = req.body;
  console.log(req.body);
  try {
    // Validación básica
    if (!user_name || !user_email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: {  user_email:user_email } });
    if (existingUser) {
      return res.status(403).json({ error: 'El correo ya está registrado' });
    }

    // Crear usuario
    const user = await User.create({
       user_name: user_name, user_email: user_email, password });
    return res.status(201).json({
      ok: true,
      status: 201,
      message: 'Usuario registrado con éxito', user: { id: user.id, name: user_name, email: user_email } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

// Login de usuario
const login = async (req, res) => {
  const { user_email, password } = req.body;

  try {
    // Validar campos
    if (!user_email || !password) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }

    // Buscar usuario
    const user = await User.findOne({ where: { user_email: user_email } });
    if (!user) {
      return res.status(400).json({ error: 'No se encontró el usuario' });
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Password incorrecto' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.id, email: user.user_email }, JWT_SECRET, { expiresIn: '1d' });
    return res.status(200).json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { register, login };
