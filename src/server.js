import express from 'express'
import bodyparser from 'body-parser'
import dateIdeaRouter from './components/dateIdea/dateIdea.router.js'
import { connect } from './utilities/database.js'

const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

connect()

app.get('/', (req, res) => {
  res.send(hi())
})

app.use('/api/dateIdea', dateIdeaRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))
