import { Router } from "express"
import { signUp } from "../controllers/signupController"
import { loginUser } from "../controllers/loginController"
import { deleteUsers, listUsers } from "../controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { getProfile } from "../controllers/profileController"
import { createPost} from "../controllers/postController"
import { uploadsConfig } from "../middlewares/uploadMiddleware"
import { likePost, unlikePost } from "../controllers/likeController"
import multer from 'multer';

const router = Router()
const upload = multer(uploadsConfig);

router.post('/signup', signUp)

router.get('/users', listUsers)
router.delete('/users', deleteUsers)

router.post('/login', loginUser)

router.get('/profile', authMiddleware, getProfile)

router.post('/post', upload.single('image'), authMiddleware, createPost)
router.post('/post/:postId', authMiddleware, likePost)
router.delete('/post/:postId', authMiddleware, unlikePost)

export { router }