import { User } from '../user/user.model.js'

const getCurrentUser = (req, res) => {
  if (req.user && req.session.user) res.status(200).send(req.user)
  else res.status(400).end()
}

const controller = {
  getCurrentUser: getCurrentUser,
}

export default controller
