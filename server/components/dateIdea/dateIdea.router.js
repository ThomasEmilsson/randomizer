import Router from 'express'
import dateIdeaController from './dateIdea.controller.js'
const router = Router()

router
  .route('/')
  .post(dateIdeaController.createDateIdea)
  .get(dateIdeaController.getDateIdeas)
  .delete(dateIdeaController.deleteDateIdeas)

router
  .route('/:id')
  .get(dateIdeaController.getDateIdea)
  .delete(dateIdeaController.deleteDateIdea)
  .put(dateIdeaController.updateDateIdea)

export default router
