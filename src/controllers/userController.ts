import { prisma } from "../database/prisma";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { BadRequestError } from "../helpers/apiErrors";

export async function signUp(req: Request, res: Response) {
    const { name, username, email, password } = req.body

    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (userExists) {
        throw new BadRequestError('User already exists.')
    }

    const hashPass = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            username,
            email,
            password: hashPass
        }
    })

    return res.status(200).send('User created successfully.')
   
}

export async function listUsers(req: Request, res: Response) {
    const allUsers = await prisma.user.findMany()

    return res.status(200).send(allUsers)
}