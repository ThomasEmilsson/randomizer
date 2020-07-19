import React from 'react'
import './welcome.scss'
import logo from '../../images/logo-test.png'
import ThemeHandler from '../themeHandler/themeHandler'

const Welcome = (props) => {
  return (
    <div className="grid-container">
      <div className="panel">
        <img className="logo" src={logo} alt="cozy-logo" />
        <img className="logo-sub" src={logo} alt="date-night-logo" />
        <button className="button-login">Login</button>
        <button className="button-signup">Sign Up</button>
        {/* <ThemeHandler /> */}
      </div>
    </div>
  )
}

export default Welcome
