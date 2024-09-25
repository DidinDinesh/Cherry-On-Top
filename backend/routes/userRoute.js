
import express from 'express'
import { loginUser, registerUser, googleAuth   } from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/google-login", googleAuth);

export default userRouter;