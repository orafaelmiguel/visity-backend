import { Router } from "express"
import { signUp } from "../controllers/signupController"
import { loginUser } from "../controllers/loginController"
import { deleteUsers, listUsers } from "../controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { getProfile } from "../controllers/profileController"

const router = Router()

router.post('/signup', signUp)

router.get('/users', listUsers)
router.delete('/users', deleteUsers)

router.post('/login', loginUser)

router.get('/profile', authMiddleware, getProfile)

export { router }