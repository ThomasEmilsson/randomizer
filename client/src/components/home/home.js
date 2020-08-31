import React, { useContext, useRef, useEffect } from 'react'
import Settings from '../home/settings'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'
// import { useHistory } from 'react-router-dom'
import { getCurrentUser } from '../../api/requests'
import Nav from '../nav/nav'
// import CardList from '../../components/cardList/cardList'

const Home = () => {
  // let history = useHistory()
  const [, setTheme] = useContext(ThemeContext)
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
      <div className="grid-container">
        <Nav className="nav" />
        {/* <CardList dates={datesList} /> */}
        <Settings />
      </div>
    </div>
  )
}

export default Home
