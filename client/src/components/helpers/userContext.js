import { createContext } from 'react'

const UserContext = createContext([{ email: '', token: '' }, () => {}])

export default UserContext
