import Router from 'express'
import dateIdeaController from '../dateIdea/dateIdea.controller.js'
const router = Router()

router
  .route('/')
  .post(dateIdeaController.createDateIdea)
  .get(dateIdeaController.getDateIdeas)

router
  .route('/:id')
  .get(dateIdeaController.getDateIdea)
  .delete(dateIdeaController.deleteDateIdea)

export default router
