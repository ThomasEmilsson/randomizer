import { createContext } from 'react'

const UserContext = createContext([
  { name: '', email: '', token: '' },
  () => {},
])

export default UserContext
