import { app } from "../../app";
import request from "supertest";

describe('like controller', () => {
    let token: any
    let userId: any
    let postId: any

    beforeAll(async () => {
        const res = await request(app).post('/login').send({
            email: 'email@email.com',
            password: 'password'
        });
        token = res.body.token;
        userId = res.body.userId

        const post = await request(app)
            .post('/post')
            .send({ content: 'content', imageUrl: 'imageurl' })
            .set('authorization', `Bearer ${token}`)
        postId = post.body.id
    })

    test('should be able to like a post', async () => {
        const res = await request(app)
            .post(`/post/${postId}`)
            .send({ userId: userId })
            .set('authorization', `Bearer ${token}`)
        .expect(200)
    })
})