import React, { useRef, useContext, useEffect } from 'react'
import ThemeButton from './themeButton.js'
import ThemeContext from '../helpers/themeContext'
import { updateTheme } from '../../api/requests'
import UserContext from '../helpers/userContext.js'

const ThemeUpdater = (props) => {
  const [theme, setTheme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)
  const isFirst = useRef(false)

  useEffect(() => {
    if (setTheme && isFirst.current) {
      async function asyncUpdateTheme() {
        await updateTheme({ theme: theme, token: user.token })
      }

      asyncUpdateTheme()
    }
    isFirst.current = true
  })

  return (
    <div className="buttons">
      <ThemeButton
        className="dark-theme"
        value="theme-dark"
        updateTheme={setTheme}
      />
      <ThemeButton
        className="light-theme"
        value="theme-light"
        updateTheme={setTheme}
      />
      <ThemeButton
        className="red-theme"
        value="theme-red"
        updateTheme={setTheme}
      />
      <ThemeButton
        className="brown-theme"
        value="theme-brown"
        updateTheme={setTheme}
      />
      <ThemeButton
        className="teal-theme"
        value="theme-teal"
        updateTheme={setTheme}
      />
      <ThemeButton
        className="blue-theme"
        value="theme-blue"
        updateTheme={setTheme}
      />
    </div>
  )
}

export default ThemeUpdater
