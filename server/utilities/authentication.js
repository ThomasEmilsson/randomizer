import jwt from 'jsonwebtoken'
import session from 'express-session'
import { keys } from '../config/keys.js'
import { User } from '../components/user/user.model.js'

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, keys.jwt.privateKey, {
    expiresIn: keys.jwt.expiresIn,
  })
}

const verifyToken = (token) => {
  return jwt.verify(token, keys.jwt.privateKey)
}

const signUp = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'missing fields' })
  }
  const { email } = req.body
  try {
    if (await User.findOne({ email: email })) {
      return res.status(400).send({ message: 'Email already used' })
    }
    const user = await User.create(req.body)
    const token = generateToken(user)
    req.session.user = user
    return res.status(201).send({ token })
  } catch (err) {
    res.status(500).end()
  }
}

const signIn = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'missing fields' })
  }
  const userMessage = { message: 'Invalid email and password combination' }

  try {
    const user = await User.findOne({ email: req.body.email }).select(
      'name email password'
    )

    if (!user) {
      return res.status(401).send(userMessage)
    }

    const match = await user.comparePassword(user.password)

    if (!match) {
      return res.status(401).send(userMessage)
    }

    const token = generateToken(user)
    req.session.user = user
    return res.status(200).send({ token })
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}

const signOut = (req, res) => {
  try {
    // if (req.session && req.session.user) {
    if (req.session) {
      req.session.cookie.maxAge = 0
      req.session.user = null
      req.session.destroy()
      return res.status(200).end()
    }
    res.status(400).end()
  } catch (err) {
    console.error(err)
    res.status(500).end()
  }
}

const applyToken = async (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end()
  }
  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (err) {
    return res.status(401).end()
  }

  const user = await User.findById(payload.id).select('-password').lean().exec()

  if (!user) {
    return res.status(401).end()
  }

  req.user = user
  next()
}

export { signUp, signIn, signOut, applyToken }
