import { prisma } from "../database/prisma";
import { Request, Response } from "express";

export async function createComment(req: Request, res: Response) {
    const { postId } = req.params
    const { content } = req.body
    const userId = req.user.id

    const comment = await prisma.comment.create({
        data: {
            content,
            postId: postId,
            userId: userId
        },
    })

    return res.status(200).send('Comment sent.')
}