import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { keys } from '../../config/keys.js'
import { DateIdea } from '../dateIdea/dateIdea.model.js'

const partnerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    status: {
      type: Number,
      enums: [
        0, // Connect Account
        1, // Requested
        2, // Pending
        3, // Accounts Connected
      ],
    },
  },
  { timestamps: true }
)

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
  partners: {
    type: [partnerSchema],
    default: [],
    required: false,
    validate: {
      validator: function () {
        return this.partners.length <= keys.MAX_PARTNERS
      },
      message: (items) =>
        `${items.value} exceeds maximum array size of ${keys.MAX_PARTNERS}`,
    },
  },
  settings: {
    theme: {
      type: String,
      required: true,
      default: 'light',
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
const Partner = mongoose.model('partner', partnerSchema)

export { User, Partner }
