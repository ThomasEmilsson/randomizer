import express from 'express'
import mongoose from 'mongoose'
import keys from './config/keys.js'

const app = express()
const port = 3000
// app.use(express.json())

const db = keys.mongoURI

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Randomize Me')
})

app.post('/date', function (req, res) {
  res.send('Post Request')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
