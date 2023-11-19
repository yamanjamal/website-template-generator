import websiteController from '../controllers/websiteController.ts'
import express from 'express'

const router = express.Router()

router.route('/').post(websiteController.store)

export default router
