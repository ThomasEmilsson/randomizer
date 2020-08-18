import React, { useContext } from 'react'
import ThemeButton from './themeButton.js'
import ThemeContext from '../helpers/themeContext'

const ThemeUpdater = (props) => {
  const [theme, setTheme] = useContext(ThemeContext)

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
