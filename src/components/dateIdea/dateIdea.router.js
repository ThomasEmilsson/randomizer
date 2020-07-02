import Router from 'express'
import dateIdeaController from '../dateIdea/dateIdea.controller.js'
const router = Router()

router
  .route('/')
  .post(dateIdeaController.createDate)
  .get(dateIdeaController.getDates)

export default router
