import { keys } from '../config/keys.js'
import session from 'express-session'
import connectMongo from 'connect-mongo'

const mongoStore = connectMongo(session)

const sessionHandler = session({
  secret: keys.session,
  resave: false,
  saveUninitialized: false,
  store: new mongoStore({ url: keys.mongoURI }),
})

export { sessionHandler as session }
