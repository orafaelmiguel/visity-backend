import { prisma } from "../database/prisma"
import { Request, Response } from "express"

export async function feed(req: Request, res: Response) {
    const { postId } = req.params
    const userId = req.user.id

    const feed = await prisma.post.findMany({
        select: {
            content: true,
            imageUrl: true,
            createdAt: true,
            Comment: {
                select: {
                    content: true,
                    createdAt: true
                }
            },
            user: {
                select: {
                    name: true,
                    username: true
                }
            }
        }
    })

    return res.status(200).send(feed)
}