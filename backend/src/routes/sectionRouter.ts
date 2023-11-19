import express from 'express'
import sectionController from '../controllers/sectionController.ts'

const router = express.Router()

router.route('/').get(sectionController.index)

export default router
