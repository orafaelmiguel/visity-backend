import { Router } from "express"
import { signUp } from "../controllers/signupController"
import { loginUser } from "../controllers/loginController"
import { deleteUsers, listUsers } from "../controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { getProfile } from "../controllers/profileController"
import { createPost } from "../controllers/postController"

const router = Router()

router.post('/signup', signUp)

router.get('/users', listUsers)
router.delete('/users', deleteUsers)

router.post('/login', loginUser)

router.get('/profile', authMiddleware, getProfile)

router.post('/post', authMiddleware, createPost)

export { router }