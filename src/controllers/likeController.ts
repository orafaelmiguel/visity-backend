import { prisma } from "../database/prisma";
import { Request, Response } from "express";

export async function likePost(req: Request, res: Response) {
    const { postId } = req.params
    const userId = req.user.id

    const like = await prisma.like.create({
        data: {
            postId: postId,
            userId: userId
        },

        include: {
            post: {
                select: {
                    content: true,
                    imageUrl: true,
                    createdAt: true
                }
            }
        }
    })

    return res.status(200).send(like)
}

export async function unlikePost(req: Request, res: Response) {
    const { postId } = req.params
    const userId = req.user.id

    const unlike = await prisma.like.deleteMany({
        where: {
            postId: postId,
            userId: userId
        }
    })

    res.status(200).send('Removed.')
}