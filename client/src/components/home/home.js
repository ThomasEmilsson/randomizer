import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './home.scss'
const Home = () => {
  const [theme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)

  const letterExtractor = () => {
    return
  }
  return (
    <div className="home">
      <div className="grid-container">
        <div className="nav">
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
          <div className="logo-app">a</div>
        </div>
        <div className="title">b</div>
        <div className="cards">c</div>
      </div>

      {/* <h1>Hello</h1>
      <h2>{user.email}</h2> */}
    </div>
  )
}

export default Home
