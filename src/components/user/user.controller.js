import { User } from '../user/user.model.js'
import { DateIdea } from '../dateIdea/dateIdea.model.js'

const getCurrentUser = (req, res) => {
  if (req.user && req.session.user) res.status(200).send(req.user)
  else res.status(400).end()
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    })

    if (!user)
      return res.status(400).send({ message: 'No user found to delete' })

    req.session.cookie.maxAge = 0
    req.session.user = null
    req.session.destroy()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}
const controller = {
  getCurrentUser: getCurrentUser,
  deleteUser: deleteUser,
}

export default controller
