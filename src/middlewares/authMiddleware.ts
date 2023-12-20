import { Request, Response, NextFunction } from "express"
import { prisma } from "../database/prisma"
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from "../helpers/apiErrors"

type JwtPayload = {
    id: string
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers 

    if(!authorization) throw new UnauthorizedError('Unauthorized')

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if(!user) throw new UnauthorizedError('Unauthorized')

    req.user = user


    next()
}