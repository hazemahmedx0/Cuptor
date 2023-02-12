import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'

import postController from '../controllers/postController.js'

dotenv.config()

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
router.route('/').get(postController.getPosts)

router.route('/').post(postController.createPost)

export default router
