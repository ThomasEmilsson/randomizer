import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { keys } from '../../config/keys.js'
import { DateIdea } from '../dateIdea/dateIdea.model.js'

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  connected: {
    type: Boolean,
    required: true,
  },
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    useCreateNewIndex: true,
  },
  password: {
    type: String,
    required: true,
  },
  settings: {
    theme: {
      type: String,
      required: true,
      default: 'light',
    },
    partners: {
      type: [partnerSchema],
      default: [],
      required: false,
    },
  },
})

userSchema.pre('findOneAndDelete', async function (next) {
  await DateIdea.deleteMany({ created_by: this.getQuery()._id })
  next()
})

userSchema.pre('save', function (next) {
  var user = this
  if (!this.isModified) {
    return next()
  }

  bcrypt.genSalt(keys.SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (password) {
  const passwordHash = this.password

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, match) => {
      if (err) {
        return reject(err)
      }

      resolve(match)
    })
  })
}

const User = mongoose.model('user', userSchema)

export { User }
