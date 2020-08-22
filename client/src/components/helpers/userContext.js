import { createContext } from 'react'

const UserContext = createContext([
  { name: '', email: '', token: '', id: '' },
  () => {},
])

export default UserContext
