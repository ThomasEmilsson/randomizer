import React, { useContext } from 'react'
import './settings.scss'

import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'

const Settings = () => {
  const [theme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)

  return (
    <div className="settings">
      <div className={`title ${theme}`}> settings </div>

      <div className="contents"></div>
    </div>
  )
}

export default Settings
