import express from 'express'
import bodyparser from 'body-parser'
import dateIdeaRouter from './components/dateIdea/dateIdea.router.js'
import { connect } from './utilities/database.js'
import { generateToken, verifyToken } from './utilities/authentication.js'
// import { User } from './components/user/user.model.js'

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

connect()

app.get('/', (req, res) => {
  res.send('base')
})

app.get('/api/token', (req, res) => {
  const user = {
    id: '1234',
  }
  const token = generateToken(user)
  console.log('Token: ' + token)

  try {
    verifyToken(token)
  } catch (err) {
    console.log(err)
  }
  res.status('200').end()
})

app.use('/api/dateIdea', dateIdeaRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))
