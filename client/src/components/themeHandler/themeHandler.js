import React, { useState, useEffect } from 'react'
import updateDocument from './updateDocument.js'
import ThemeButton from '../button/themeButton.js'
const Button = (props) => {
  const [theme, setTheme] = useState('theme-light')

  useEffect(() => {
    updateDocument.updateClasses('body', theme)
    updateDocument.updateClasses('button', theme)
  })

  return (
    <div>
      <p> Current Theme = {theme}</p>
      <button
        onClick={(e) => setTheme(e.target.value)}
        value="theme-default"
        // className={theme}
      >
        Set to Default Theme
      </button>
      <br />
      <button
        onClick={(e) => setTheme(e.target.value)}
        value="theme-light"
        // className={theme}
      >
        Set to Light Theme
      </button>
      <br />
      <button
        onClick={(e) => setTheme(e.target.value)}
        value="theme-dark"
        // className={theme}
      >
        Set To Dark Theme
      </button>
    </div>
  )
}

export default Button
