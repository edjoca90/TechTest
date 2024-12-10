// tests/health.test.js
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app'; // Importa tu aplicación de Express

describe('Health Check', () => {
  it('should return status OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'OK',
      database: 'Connected',
      timestamp: expect.any(String),
    });
  });
});