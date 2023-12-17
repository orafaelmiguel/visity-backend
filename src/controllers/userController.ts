import { prisma } from "../database/prisma";
import { Request, Response } from "express";

export async function listUsers(req: Request, res: Response) {
    const allUsers = await prisma.user.findMany()

    return res.status(200).send(allUsers)
}

export async function deleteUsers(res: Response) {
    await prisma.user.deleteMany()

    return res.status(200).send('Deleted.')
}