import React, { useContext, useRef, useEffect } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'
import { getCurrentUser } from '../../api/requests'
import Nav from '../nav/nav'

const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)
  const isFirstHome = useRef(true)

  useEffect(() => {
    if (isFirstHome.current) {
      async function asyncGetCurrentUser() {
        let response = await getCurrentUser(user.token)
        setTheme(response.settings.theme)
      }

      asyncGetCurrentUser()
      isFirstHome.current = false
    }
  })

  return (
    <div className="home">
      <Nav className="nav" />
    </div>
  )
}

export default Home
