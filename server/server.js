import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dateIdeaRouter from './components/dateIdea/dateIdea.router.js'
import userRouter from './components/user/user.router.js'
import emailRouter from './components/email/email.router.js'
import { connect } from './utilities/database.js'
import {
  signUp,
  signIn,
  signOut,
  applyToken,
} from './utilities/authentication.js'
import { session } from './utilities/sessionHandler.js'
import { notFound, errorHandler } from './utilities/middleware.js'

const app = express()
const port = 3500

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
app.use(helmet())

connect()
app.use(session)

app.post('/signUp', signUp)
app.post('/signIn', signIn)
app.post('/signOut', signOut)

app.use('/email', emailRouter)
app.use('/api', applyToken)
app.use('/api/user', userRouter)
app.use('/api/dateIdea', dateIdeaRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`App listening on port ${port}!`))
