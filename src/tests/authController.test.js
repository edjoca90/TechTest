// src/tests/authController.test.js
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app'; 


describe('Auth API', () => {
  it('Debe registrar un usuario correctamente', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ 
        user_name: 'Test User',
        user_email: 'test@example.com',
        password: 'password123' 
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Usuario registrado con éxito');
  });

  it('Debe retornar error para usuario ya registrado', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ user_name: 'Test User', user_email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty('error', 'El correo ya está registrado');
  });
  

});
