import axios from 'axios'

const testPost = async ({ name, email, password }) => {
  const data = {
    name: name,
    email: email,
    password: password,
  }
  try {
    const response = await axios.post('http://localhost:3500/signUp', data)
    console.log(response.data)
    return response.data
  } catch (err) {
    return err.response
  }
}

export default { testPost }
