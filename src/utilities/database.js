import mongoose from 'mongoose'
import { keys } from '../config/keys.js'

const connect = (database = keys.mongoURI) => {
  return mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connection to Database: Successful'))
    .catch((err) => console.log(err))
}

export { connect }
