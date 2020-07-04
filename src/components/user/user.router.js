import Router from 'express'
import userController from '../user/user.controller.js'

const router = Router()

router
  .route('/')
  .post(userController.createUser)
  .get(userController.getCurrentUser)

export default router
