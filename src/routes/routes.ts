import { Router } from "express";
import { signUp, listUsers } from "../controllers/userController";

const router = Router()

router.post('/signup', signUp)
router.get('/user', listUsers)

export { router }