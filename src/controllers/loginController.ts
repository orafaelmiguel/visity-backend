import { prisma } from "../database/prisma"
import { Request, Response } from "express"
import 'dotenv/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { BadRequestError} from "../helpers/apiErrors"

export async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) throw new BadRequestError('Invalid e-mail or password.')

    const verifyPass = await bcrypt.compare(password, user.password)

    if (!verifyPass) throw new BadRequestError('Invalid e-mail or password.')

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '24h' })
    const { password: _, ...userLogin } = user

    return res.status(200).send({
        user: userLogin,
        token: token
    })
}