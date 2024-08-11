import express from 'express'
import { register, login,updateProfile, logout } from '../controllers/user.controller.js'
import isAuthenticated from '../midddleware/isAuthenticate.js'
import { singleUpload } from '../midddleware/multer.js'

const router = express.Router()

router.post("/register",singleUpload, register)
router.post("/login", login)
router.put("/profile/update",isAuthenticated,singleUpload,updateProfile)
router.get("/logout",logout)

export default router