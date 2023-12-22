import { prisma } from "../database/prisma";
import { Request, Response } from "express";
import { BadRequestError, UnauthorizedError, notFoundError } from "../helpers/apiErrors";

export async function createPost(req: Request, res: Response) {
    const { content } = req.body
    const userId = req.user.id

    let imageUrl = null;
    if (req.file) {
        imageUrl = req.file.path
    }

    const post = await prisma.post.create({
        data: {
            content,
            imageUrl,
            userId: userId
        },

        include: {
            user: {
                select: {
                    name: true,
                    username: true
                }
            },
        }

    })

    return res.status(200).send(post)
}

export async function deletePost(req: Request, res: Response) {
    const { postId } = req.params
    const userId = req.user.id

    const post = await prisma.post.findUnique({
        where: {
            id: postId
        }
    })

    if(!post) throw new notFoundError('Not Found')
    if(post.userId !== userId) throw new UnauthorizedError('Unauthorized')

    await prisma.post.delete({
        where: {
            id: postId
        }
    })
    
    return res.status(200).send('Post deleted.')
}