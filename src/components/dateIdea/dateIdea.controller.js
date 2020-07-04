import { DateIdea } from './dateIdea.model.js'

const postDateIdea = (req, res) => {
  const created_by = req.user._id
  try {
    const newDateIdea = new DateIdea({ ...req.body, created_by })
    newDateIdea
      .save()
      .then((dateIdea) =>
        console.log('New Date inserted into the database:' + dateIdea)
      )
      .catch((err) => console.log(err))
    res.status(201).json({ data: newDateIdea })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const getDateIdeas = (req, res) => {
  try {
    res.status(200).end()
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const controller = {
  createDate: postDateIdea,
  readDates: getDateIdeas,
}

export default controller
