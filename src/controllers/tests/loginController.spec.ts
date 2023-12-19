import { app } from "../../app"
import request from "supertest"

describe('login controller', () => {
    test('user can login', async () => {
        const userData = {
            name: 'name',
            username: 'username',
            email: 'email@email.com',
            password: 'password'
        }
    
        const loginResponse = await request(app).post('/login').send({
            email: userData.email,
            password: userData.password
        });
        expect(200)
    })
})