import { app } from "../../app"
import request from "supertest"

describe('SignUp Controller', () => {
    test('should create a new user successfully', async () => {
        const userData = {
            name: 'name',
            username: 'username',
            email: 'email@email.com',
            password: 'password'
        }

        const signUpResponse = await request(app).post('/signup').send(userData)
        expect(200)
    })

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