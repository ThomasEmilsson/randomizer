import Router from 'express'
import userController from '../user/user.controller.js'

const router = Router()

router.route('/').get(userController.getCurrentUser)
router.route('/:id').delete(userController.deleteUser)

export default router
