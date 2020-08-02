import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'

const Home = () => {
  const [theme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)

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
  ]

  const letterExtractor = () => {
    if (user.name === '') {
      return user.email.charAt(0)
    } else {
      return user.name.charAt(0)
    }
  }

  const extractCards = () => {}
  return (
    <div className="home">
      <div className="grid-container">
        <div className={`nav ${theme}`}>
          <div className="logo-user">
            <div className="logo">V</div>
          </div>

          <div className="options-card">
            <div className="option-show-cards">see cards</div>
            <div className="option-filter">filter</div>
            <div className="option-add-card">add card</div>
            <div className="option-shuffle">shuffle</div>
          </div>

          <div className="options-user">
            <div className="option-settings">settings</div>
            <div className="option-log-out">log out</div>
          </div>

          <div className="logo-app">---------cozy---------</div>
        </div>

        <div className={`title ${theme}`}>date cards</div>
        <div className="cards">
          {datesList.map((idea) => (
            <div className={`card-date ${theme}`}>
              <p>{idea.name}</p>
              <p>{user.name === '' ? 'by Thomas' : 'by Thomas'}</p>
            </div>
          ))}
          {/* <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div>
          <div className="card-date">[]</div> */}
        </div>
      </div>
    </div>
  )
}

export default Home