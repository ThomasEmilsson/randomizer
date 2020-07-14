import { User, Partner } from './user.model.js'
import { DateIdea } from '../dateIdea/dateIdea.model.js'
import { keys } from '../../config/keys.js'
import { log } from 'console'

const getCurrentUser = (req, res) => {
  if (req.user && req.session.user) res.status(200).send(req.user)
  else res.status(400).end()
}

const deleteUser = async (req, res) => {
  // console.log(req.params.id)
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user)
      return res.status(400).send({ message: 'No user found to delete' })

    req.session.cookie.maxAge = 0
    req.session.user = null
    req.session.destroy()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

// 1. Check if reciever exists
// 2. Check if sender is full or reciever is full
// 3. Check if sender exists in receiver
// 4. Add data to each
const connectRequest = async (req, res) => {
  try {
    const partner = await User.findOne({ email: req.query.email })
    const user = await User.findOne({ email: req.user.email })

    if (!partner || !user) {
      return res
        .status(400)
        .send({ message: 'No account registered with that email' })
    }
    const dataForPartner = new Partner({
      user: user._id,
      status: 2,
    })

    const dataForUser = new Partner({
      user: partner._id,
      status: 1,
    })

    if (
      user.partners.length >= keys.MAX_PARTNERS ||
      partner.partners.length >= keys.MAX_PARTNERS
    ) {
      return res.status(400).send({
        message: 'Either you or partner has the maximum number of partners',
      })
    }

    if (
      partner.partners.some(
        (item) => item.user.toString() === user._id.toString()
      )
    ) {
      return res
        .status(400)
        .send({ message: 'Partner already exists in your list' })
    }

    await partner.partners.push(dataForPartner)
    await partner.save()

    await user.partners.push(dataForUser)
    await user.save()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    console.log('test')
    res.status(400).end()
  }
}

// Get partner and user details
// Find index in partner list for each
// Update to Status 3 for each
const acceptRequest = async (req, res) => {
  try {
    const partner = await User.findOne({ email: req.query.email })
    const user = await User.findOne({ email: req.user.email })

    if (!partner || !user) {
      return res.status(400).send({ message: 'Could not find partner' })
    }

    const dataForPartner = new Partner({
      user: user._id,
      status: 3,
    })

    const dataForUser = new Partner({
      user: partner._id,
      status: 3,
    })

    let indexToUpdateForPartner = partner.partners.findIndex(
      (item) => item.user.toString() == user._id.toString()
    )

    let indexToUpdateForUser = user.partners.findIndex(
      (item) => item.user.toString() == partner._id.toString()
    )

    await partner.partners.set(indexToUpdateForPartner, dataForPartner)
    await partner.save()

    await user.partners.set(indexToUpdateForUser, dataForUser)
    await user.save()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

// Get partner and user details
// Remove details of each other in each list
const rejectRequest = async (req, res) => {
  try {
    const partner = await User.findOne({ email: req.query.email })
    const user = await User.findOne({ email: req.user.email })

    if (!partner || !user) {
      return res.status(400).send({ message: 'Could not reject request' })
    }

    await partner.partners.pop({ user: user._id })
    await partner.save()

    await user.partners.pop({ user: partner._id })
    await user.save()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

// Get partner and user details
// Remove details of each other in each list
const cancelRequest = async (req, res) => {
  try {
    const partner = await User.findOne({ email: req.query.email })
    const user = await User.findOne({ email: req.user.email })

    if (!partner || !user) {
      return res.status(400).send({ message: 'Could not cancel request' })
    }

    await partner.partners.pop({ user: user._id })
    await partner.save()

    await user.partners.pop({ user: partner._id })
    await user.save()

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const controller = {
  getCurrentUser: getCurrentUser,
  deleteUser: deleteUser,
  connectRequest: connectRequest,
  acceptRequest: acceptRequest,
  rejectRequest: rejectRequest,
  cancelRequest: cancelRequest,
}

export default controller
