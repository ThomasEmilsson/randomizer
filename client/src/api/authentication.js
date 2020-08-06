import axios from 'axios'

const signUp = async ({ name, email, password }) => {
  try {
    const data = {
      name: name,
      email: email,
      password: password,
    }
    const response = await axios.post('http://localhost:3500/signUp', data)
    return response.data
  } catch (err) {
    return err.response
  }
}

const signIn = async ({ email, password }) => {
  try {
    const data = {
      email: email,
      password: password,
    }
    const response = await axios.post('http://localhost:3500/signIn', data)
    return response.data
  } catch (err) {
    return err.response
  }
}

const signOut = async () => {
  try {
    const config = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
    const response = await axios.post(
      'http://localhost:3500/signOut',
      null,
      config
    )
    return response
  } catch (err) {
    return err.response
  }
}
export { signUp, signIn, signOut }
