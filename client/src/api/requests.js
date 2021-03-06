import axios from 'axios'

// TODO: Split Up Requests to UserRequests and DateRequests

// SetTheme Hook when logging out calls this method
//  - safeguard to include name to prevent unnecessary request
const updateTheme = async ({ name, theme, token }) => {
  if (name === '') {
    return ''
  }

  try {
    const data = {
      theme: theme,
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    const response = await axios.put(
      'http://localhost:3500/api/user/updateTheme',
      data,
      config
    )
    return response
  } catch (err) {
    return err.response
  }
}

const updateName = async ({ name, token }) => {
  try {
    const data = {
      name: name,
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }

    const response = await axios.put(
      'http://localhost:3500/api/user/updateName',
      data,
      config
    )
    return response
  } catch (err) {
    return err.response
  }
}

const updatePassword = async ({ password, token }) => {
  try {
    const data = {
      password: password,
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
    const response = await axios.put(
      'http://localhost:3500/api/user/updatePassword',
      data,
      config
    )
    return response
  } catch (err) {
    return err.response
  }
}

const createDateIdea = async ({
  name,
  location,
  description,
  price,
  topics,
  type,
  token,
}) => {
  const data = {
    name: name,
    location: location,
    description: description,
    price: price,
    topics: topics,
    type: type,
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const response = await axios.post(
      'http://localhost:3500/api/dateIdea',
      data,
      config
    )
    return response.data
  } catch (err) {
    return err.response
  }
}

const deleteDateIdea = async ({ dateIdeaId, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  try {
    const response = await axios.delete(
      `http://localhost:3500/api/dateIdea/${dateIdeaId}`,
      null,
      config
    )
    return response.data
  } catch (err) {
    return err.response
  }
}

const updateDateIdea = async ({
  name,
  location,
  description,
  price,
  topics,
  type,
  token,
  dateIdeaId,
}) => {
  const data = {
    name: name,
    location: location,
    description: description,
    price: price,
    topics: topics,
    type: type,
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const response = await axios.put(
      `http://localhost:3500/api/dateIdea/${dateIdeaId}`,
      data,
      config
    )
    return response.data
  } catch (err) {
    return err.response
  }
}

const getDateIdeas = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await axios.get(
      `http://localhost:3500/api/dateIdea`,
      config
    )

    return response.data
  } catch (err) {
    return err.response
  }
}

const getCurrentUser = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.get(`http://localhost:3500/api/user`, config)
    return response.data
  } catch (err) {
    return err.response
  }
}
const deleteAccount = async ({ id, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await axios.delete(
      `http://localhost:3500/api/user/${id}`,
      config
    )
    return response
  } catch (err) {
    return err.response
  }
}

// Get User Partners Email/Id
const getPartners = async ({ id, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const currentUser = await axios.get(
      `http://localhost:3500/api/user`,
      config
    )

    let partnerList = []

    for (let i = 0; i < currentUser.data.partners.length; i++) {
      const partner = await axios.get(
        `http://localhost:3500/api/user/${currentUser.data.partners[0].user}`,
        config
      )
      partnerList.push({
        name: partner.data.name,
        email: partner.data.email,
        id: partner.data._id,
        status: currentUser.data.partners[0].status,
      })
    }

    return partnerList
  } catch (err) {
    return err.response
  }
}

export {
  updateTheme,
  updateName,
  createDateIdea,
  updateDateIdea,
  deleteDateIdea,
  getDateIdeas,
  getCurrentUser,
  updatePassword,
  deleteAccount,
  getPartners,
}
