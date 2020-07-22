import React, { useContext, useEffect } from 'react'
import './welcome.scss'
import logo from '../../images/logo-test.png'
import { Link } from 'react-router-dom'
import test from '../../api/requests.js'
import ThemeContext from '../helpers/themeContext'
import updateDocument from '../themeHandling/updateDocument.js'

const Welcome = (props) => {
  const [theme] = useContext(ThemeContext)

  useEffect(() => {
    updateDocument.updateClasses('body', theme)
    updateDocument.updateClasses('button', theme)
    updateDocument.updateClasses('.panel', theme)
  })

  return (
    <div className="welcome">
      <div className="grid-container">
        <div className="panel">
          <img className="logo" src={logo} alt="cozy-logo" />
          <img className="logo-sub" src={logo} alt="date-night-logo" />

          <Link to="/login">
            <button className="button-login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="button-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
