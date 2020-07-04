import express from 'express'
import bodyparser from 'body-parser'
import dateIdeaRouter from './components/dateIdea/dateIdea.router.js'
import userRouter from './components/user/user.router.js'
import { connect } from './utilities/database.js'
import { signUp, signIn } from './utilities/authentication.js'
// import { User } from './components/user/user.model.js'

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

connect()

app.get('/', (req, res) => {
  res.send('base')
})

app.post('/signUp', signUp)
app.post('/signIn', signIn)

app.use('/api/user', userRouter)
app.use('/api/dateIdea', dateIdeaRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))
