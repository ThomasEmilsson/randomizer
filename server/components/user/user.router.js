import Router from 'express'
import userController from './user.controller.js'

const router = Router()

router.route('/').get(userController.getCurrentUser)
router.route('/:id').delete(userController.deleteUser)

router.route('/connect').post(userController.connectRequest)
router.route('/accept').post(userController.acceptRequest)
router.route('/reject').post(userController.rejectRequest)
router.route('/cancel').post(userController.cancelRequest)
router.route('/updateTheme').put(userController.updateTheme)
router.route('/updateName').put(userController.updateName)
router.route('/updatePassword').put(userController.updatePassword)
router.route('/partners').get(userController.getPartners)
router.route('/:id').get(userController.getUser)

export default router
