import { DateIdea } from './dateIdea.model.js'
import { send } from 'process'

const postDateIdea = async (req, res) => {
  const created_by = req.user._id
  try {
    const newDateIdea = await DateIdea.create({ ...req.body, created_by })
    res.status(201).send(newDateIdea)
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const getDateIdeas = async (req, res) => {
  try {
    const dateIdeas = await DateIdea.find({ created_by: req.user._id })
    if (!dateIdeas)
      return res.status(400).send({ message: 'No date ideas found' })
    res.status(200).send(dateIdeas)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

const getDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findOne({
      created_by: req.user._id,
      _id: req.params.id,
    })

    if (!dateIdea)
      return res.status(400).send({ message: 'No date idea found' })
    res.status(200).send(dateIdea)
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const updateDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findByIdAndUpdate(
      {
        created_by: req.user._id,
        _id: req.params.id,
      },
      req.body,
      { new: true }
    )

    if (!dateIdea) {
      return res.status(400).send({ message: 'No date idea found' })
    }

    res.status(200).send(dateIdea)
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const deleteDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findByIdAndDelete({
      created_by: req.user._id,
      _id: req.params.id,
    })

    if (!dateIdea)
      return res.status(400).send({ message: 'No date idea found' })

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const deleteDateIdeas = async (req, res) => {
  try {
    const dateIdeas = await DateIdea.deleteMany({
      created_by: req.user._id,
    })

    if (!dateIdeas)
      return res.status(400).send({ message: 'No date ideas found' })

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const controller = {
  createDateIdea: postDateIdea,
  getDateIdeas: getDateIdeas,
  getDateIdea: getDateIdea,
  deleteDateIdea: deleteDateIdea,
  updateDateIdea: updateDateIdea,
  deleteDateIdeas: deleteDateIdeas,
}

export default controller
