import jwt from 'jsonwebtoken'
import { User } from '../components/user/user.model.js'
import { keys } from '../config/keys.js'

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, keys.jwt.privateKey, {
    expiresIn: keys.jwt.expiresIn,
  })
}

const verifyToken = (token) => {
  return jwt.verify(token, keys.jwt.privateKey)
}

export { generateToken, verifyToken }
