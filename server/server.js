import express from 'express'
import bodyparser from 'body-parser'
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

const app = express()
const port = 3500

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

connect()
app.use(session)

app.get('/', (req, res) => {
  res.send('base')
})

app.post('/signUp', signUp)
app.post('/signIn', signIn)
app.post('/signOut', signOut)

app.use('/email', emailRouter)
app.use('/api', applyToken)
app.use('/api/user', userRouter)
app.use('/api/dateIdea', dateIdeaRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))
