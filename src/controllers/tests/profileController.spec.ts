import { app } from "../../app";
import request from "supertest";

describe('JWT Authentication', () => {
    let token: any;

    beforeAll(async () => {
        // Simular a autenticação para obter um token
        const res = await request(app).post('/login').send({
            email: 'email@email.com',
            password: 'yourPassword'
        });
        token = res.body.token;
    });

    test('should access a protected route with valid token', async () => {
        const res = await request(app)
            .get('/profile')
            .set('authorization', `Bearer ${token}`); 
        expect(200);
    });

    test('should not access a protected route with invalid token', async () => {
        const res = await request(app)
            .get('/profile')
            .set('authorization', 'Bearer invalidtoken');
        expect(401); 
    });

    test('should not access a protected route without token', async () => {
        const res = await request(app)
            .get('/profile');
        expect(401); 
    });
});

