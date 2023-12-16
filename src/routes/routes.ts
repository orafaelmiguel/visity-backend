import { Router } from "express";
import { signUp, listUsers } from "../controllers/userController";

const router = Router()

router.post('/signup', signUp)
router.get('/users', listUsers)

export { router }