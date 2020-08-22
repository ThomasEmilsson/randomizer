import React, { useContext, useRef, useEffect } from 'react'
import Settings from '../home/settings'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'
import { useHistory } from 'react-router-dom'
import { signOut } from '../../api/authentication'
import { getDateIdeas, getCurrentUser } from '../../api/requests'
// import CardList from '../../components/cardList/cardList'

const Home = () => {
  let history = useHistory()
  const [theme, setTheme] = useContext(ThemeContext)
  const [user, setUser] = useContext(UserContext)
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

  const loadSettings = () => {
    history.push('/settings')
  }
  const loadShuffle = () => {}
  const loadAddCard = () => {}
  const loadFilter = () => {}

  const loadShowCards = async () => {
    console.log(user.token)
    let response = await getDateIdeas(user.token)
    console.log(response)
  }

  const logout = async () => {
    await signOut()
    setUser({ name: '', email: '', token: '', id: '' }, 'user')
    setTheme('theme-dark')
    history.push('/')
  }

  return (
    <div className="home">
      <div className="grid-container">
        <div className={`nav ${theme}`}>
          <div className="logo-user">
            <div className="logo">V</div>
          </div>

          <div className="options-card">
            <div className="option-show-cards" onClick={() => loadShowCards()}>
              see cards
            </div>
            <div className="option-filter" onClick={() => loadFilter()}>
              filter
            </div>
            <div className="option-add-card" onClick={() => loadAddCard()}>
              add card
            </div>
            <div className="option-shuffle" onClick={() => loadShuffle()}>
              shuffle
            </div>
          </div>

          <div className="options-user">
            <div className="option-settings" onClick={() => loadSettings()}>
              settings
            </div>
            <div className="option-log-out" onClick={() => logout()}>
              log out
            </div>
          </div>

          <div className="logo-app">---------cozy---------</div>
        </div>

        {/* <CardList dates={datesList} /> */}
        <Settings />
      </div>
    </div>
  )
}

export default Home
