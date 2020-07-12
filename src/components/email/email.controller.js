import { keys } from '../../config/keys.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: keys.EMAIL, // generated ethereal user
    pass: keys.EMAIL_PASS, // generated ethereal password
  },
})

const welcomeEmail = async (req, res) => {
  return res.status(404).message({ message: 'not implemented' })
}

const goodbyeEmail = async (req, res) => {
  return res.status(404).message({ message: 'not implemented' })
}

const connectionEmail = async (req, res) => {
  return res.status(404).message({ message: 'not implemented' })
}

const verifyAccountEmail = async (req, res) => {
  return res.status(404).message({ message: 'not implemented' })
}

const testEmail = async (req, res) => {
  try {
    const recipient = req.body.recipient

    let info = await transporter.sendMail({
      from: keys.EMAIL_FROM, // sender address
      to: recipient, // list of receivers
      subject: 'Hello from Cozy', // Subject line
      text: 'Welcome to Cozy!', // plain text body
      html: '<b>Welcome to Cozy!</b>', // html body
    })

    return res.status(200).end()
  } catch (err) {
    console.error(err)
    return res.status(400).end()
  }
}

const controller = {
  test: testEmail,
  welcome: welcomeEmail,
  goodbye: goodbyeEmail,
  connection: connectionEmail,
  verify: verifyAccountEmail,
}
export default controller
