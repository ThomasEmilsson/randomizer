import { User, Partner } from '../user/user.model.js'
import { DateIdea } from '../dateIdea/dateIdea.model.js'

const getCurrentUser = (req, res) => {
  if (req.user && req.session.user) res.status(200).send(req.user)
  else res.status(400).end()
}

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    })

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

const connectRequest = async (req, res) => {
  try {
    const partner = await User.findOne({ email: req.query.email })
    const user = await User.findOne({ email: req.user.email })

    // if (user.settings.partner[0] && user.settings.partner[1]) {
    //   return res.status(400).end({ message: 'user full' })
    // }

    if (!partner) {
      return res
        .status(400)
        .send({ message: 'No account registered with that email' })
    }

    const requesterData = new Partner({
      user: user._id,
      status: 2,
    })

    const userData = new Partner({
      user: partner._id,
      status: 1,
    })

    // checks that user does not exist in partner
    // partner.settings.partners[0].user != user._id &&
    // partner.settings.partners[1].user != user._id

    // user.settings.partner[0] && user.settings.partner[1]
    // console.log(partner.settings.partners[0])

    // Add requesterData to partner
    if (!partner.settings.partners[0]) {
      console.log('Push user into Partner 0')
      await partner.settings.partners.set(0, requesterData)
      await partner.save()
    } else if (!partner.settings.partners[1]) {
      console.log('Push user into Partner 1')
      await partner.settings.partners.set(1, requesterData)
      await partner.save()
    } else {
      console.log('Partner full')
      return res.status(400).end()
    }

    if (!user.settings.partners[0]) {
      console.log('Push partner into User 0')
      await user.settings.partners.set(0, userData)
      await user.save()
    } else if (!user.settings.partners[1]) {
      console.log('Push partner into User 1')
      await user.settings.partners.set(1, userData)
      await user.save()
    } else {
      console.log('User full')
      return res.status(400).end()
    }

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

const acceptRequest = async (req, res) => {
  try {
    console.log(req.query.email)
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
}

export default controller
