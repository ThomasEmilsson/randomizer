import axios from 'axios'

const updateTheme = async ({ theme, token }) => {
  const data = {
    theme: theme,
  }
  const config = {
    headers: { 'Bearer ': token },
  }
  try {
    const response = await axios.post(
      'http://localhost:3500/api/user/updateTheme',
      data,
      config
    )
    return response.data
  } catch (err) {
    return err.resonse
  }
}

const updateName = async ({ name, token }) => {
  const data = {
    theme: theme,
  }
  const config = {
    headers: { 'Bearer ': token },
  }
  try {
    const response = await axios.post(
      'http://localhost:3500/api/user/updateName',
      data,
      config
    )
    return response.data
  } catch (err) {
    return err.resonse
  }
}

const testPost = async ({ name, email, password }) => {
  const data = {
    name: name,
    email: email,
    password: password,
  }

  try {
    const response = await axios.post('http://localhost:3500/signUp', data)
    return response.data
  } catch (err) {
    return err.response
  }
}

export default { testPost }
