import { Router } from "express";
import { createUser, listUsers } from "../controllers/userController";

const router = Router()

router.post('/user', createUser)
router.get('/user', listUsers)

export { router }