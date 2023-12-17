import { prisma } from "../database/prisma"
import { Request, Response } from "express"
import 'dotenv/config'
import { isFunctionDeclaration } from "typescript"

export async function getProfile(req: Request, res: Response) {
    return res.status(200).send(req.user)
}