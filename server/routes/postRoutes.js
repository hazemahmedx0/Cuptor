import express from 'express'
import * as dotenv from 'dotenv'

import postController from '../controllers/postController.js'

dotenv.config()

const router = express.Router()

router.route('/').get(postController.getPosts)

router.route('/').post(postController.createPost)

export default router
