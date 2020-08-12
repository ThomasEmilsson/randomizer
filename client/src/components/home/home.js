import React, { useContext } from 'react'
import Settings from '../home/settings'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'
import { useHistory } from 'react-router-dom'
import { signOut } from '../../api/authentication'
import { getDateIdeas } from '../../api/requests'
import CardList from '../../components/cardList/cardList'

const Home = () => {
  let history = useHistory()
  const [theme] = useContext(ThemeContext)
  const [user, setUser] = useContext(UserContext)

  const datesList = [
    {
      name: 'Wine & Dine',
      location: 'Home',
      description: 'drink wine at home',
      price: '$',
      topics: ['Moving Plans', 'Puppy Plans'],
      type: ['Cozy', 'Casual'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
    {
      name: 'Wine & Dine',
      location: 'Home',
      description: 'drink wine at home',
      price: '$',
      topics: ['Moving Plans', 'Puppy Plans'],
      type: ['Cozy', 'Casual'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
    {
      name: 'Wine & Dine',
      location: 'Home',
      description: 'drink wine at home',
      price: '$',
      topics: ['Moving Plans', 'Puppy Plans'],
      type: ['Cozy', 'Casual'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
    {
      name: 'Fancy Date Night Out',
      location: 'Expensive Restaurant',
      description: 'Dress up and go to expensive restaurant',
      price: '$$$',
      topics: ['Dream Vacation', 'Career Hopes'],
      type: ['Fancy', 'Romantic'],
    },
  ]

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
    let response = await signOut()
    console.log(response)
    setUser({ name: '', email: '', token: '' }, 'user')
    history.push('/')
  }

  const letterExtractor = () => {
    if (user.name === '') {
      return user.email.charAt(0)
    } else {
      return user.name.charAt(0)
    }
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

        <div className={`test`}>
          <div className={`title ${theme}`}>date cards</div>
          <div className="cards">
            {datesList.map((idea) => (
              <div key={idea.name} className={`card-date ${theme}`}>
                <p>{idea.name}</p>
                <p>{user.name === '' ? ' blank ' : 'by ' + user.email}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <CardList dates={datesList} /> */}
      </div>
    </div>
  )
}

export default Home
