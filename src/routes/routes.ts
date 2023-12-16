import { Router } from "express"
import { signUp, listUsers } from "../controllers/userController"
import { loginUser } from "../controllers/loginController"

const router = Router()

router.post('/signup', signUp)
router.get('/users', listUsers)

router.post('/login', loginUser)

export { router }