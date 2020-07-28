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
        <div className="nav">a</div>
        <div className="title">b</div>
        <div className="cards">c</div>
      </div>

      {/* <h1>Hello</h1>
      <h2>{user.email}</h2> */}
    </div>
  )
}

export default Home
