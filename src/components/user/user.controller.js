import { User } from '../user/user.model.js'

const getCurrentUser = (req, res) => {
  if (req.user) res.status(200).json({ data: req.user })
  else res.status(400).end()
}

const postUser = (req, res) => {
  try {
    const newUser = new User({ ...req.body })
    newUser.save().then((user) => console.log('New User created ' + user))
    res.status(201).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

// const updateCurrentUser = (req, res) => {
//   try {
//   } catch (err) {
//     console.error(err)
//     res.status(400).end()
//   }
// }

const controller = {
  getCurrentUser: getCurrentUser,
  createUser: postUser,
}

export default controller
