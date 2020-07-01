import Router from 'express'
import DateIdea from './dateIdea.model.js'

const router = Router()

router.post('/', (req, res) => {
  try {
    const newDateIdea = new DateIdea({ ...req.body })
    newDateIdea
      .save()
      .then((date) =>
        console.log('New Date inserted into the database:' + date)
      )
      .catch((err) => console.log(err))
    res.status(201).json({ data: newDateIdea })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

export default router
