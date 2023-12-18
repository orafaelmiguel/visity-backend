import { prisma } from "../database/prisma";
import { Request, Response } from "express";

export async function createPost(req: Request, res: Response) {
    const { content } = req.body
    const userId = req.user.id

    const post = await prisma.post.create({
        data: {
            content,
            userId: userId
        },

        include: {
            user: {
                select: {
                    name: true,
                    username: true
                }
            }
        }

    })

    return res.status(200).send(post)
}