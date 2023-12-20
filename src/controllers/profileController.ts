import { prisma } from "../database/prisma"
import { Request, Response } from "express"
import 'dotenv/config'

export async function getProfile(req: Request, res: Response) {
    const userid = req.user.id

    const profile = await prisma.user.findUnique({
        where: {
            id: userid
        },

        select: {
            name: true,
            username: true,
            posts: {
                select: {
                    content: true,
                    imageUrl: true,
                    createdAt: true
                }
            }
        }
    })

    return res.status(200).send(profile)
}