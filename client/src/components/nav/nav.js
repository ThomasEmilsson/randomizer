import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './nav.scss'
import { useHistory, NavLink } from 'react-router-dom'
import { signOut } from '../../api/authentication'
import { getDateIdeas } from '../../api/requests'

const Nav = () => {
  let history = useHistory()
  const [user, setUser] = useContext(UserContext)
  const [theme, setTheme] = useContext(ThemeContext)

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
  )
}

export default Nav
