import express from 'express'
import * as dotenv from 'dotenv'
import dalleController from '../controllers/dalleController.js'

dotenv.config()

const router = express.Router()

router.route('/').get(dalleController.testRoute)

router.route('/').post(dalleController.generateImage)

export default router
