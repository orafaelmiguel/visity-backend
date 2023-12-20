import { app } from "../../app";
import request from "supertest";

describe('Post CRUD', () => {
    let token: any

    beforeAll(async () => {
        const res = await request(app).post('/login').send({
            email: 'email@email.com',
            password: 'password'
        });
        token = res.body.token;
    });

    it('should be able to create a post', async () => {
        const res = await request(app)
            .post('/post')
            .send({ content: 'content', imageUrl: 'imageurl' })
            .set('authorization', `Bearer ${token}`)
        .expect(200)
    })
})