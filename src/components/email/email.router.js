import Router from 'express'
import emailController from '../email/email.controller.js'

const router = Router()

router.route('/').post(emailController.test)

export default router
