import axios from 'axios'

const testPost = async () => {
  const params = {
    email: 'vicky@gmail.com',
    password: '1234',
  }
  const response = await axios.post('http://localhost:3500/signIn', params)
  console.log(response)
  return response.data
}

export default { testPost }
