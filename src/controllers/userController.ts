import { prisma } from "../database/prisma";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
    const { name, username, email, password } = req.body

    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (userExists) {
        return res.status(400).send('User already exists.')
    }

    try {
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password
            }
        })

        return res.status(200).send('User created successfully.')
    } catch (error) {
        return res.status(400).send(error)
    }
}

export async function listUsers(req: Request, res: Response) {
    const allUsers = await prisma.user.findMany()

    return res.status(200).send(allUsers)
}