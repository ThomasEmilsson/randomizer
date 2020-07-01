import express from 'express'
import bodyparser from 'body-parser'
import mongoose from 'mongoose'
import keys from './config/keys.js'
import dateIdeaRouter from './components/dateIdea/dateIdea.router.js'
const app = express()
const port = 3000

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const db = keys.mongoURI

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send(hi())
})

app.use('/api/dateIdea', dateIdeaRouter)

app.listen(port, () => console.log(`App listening on port ${port}!`))
