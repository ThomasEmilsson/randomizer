import React, { useState, useEffect } from 'react'
import updateDocument from './updateDocument.js'
import ThemeButton from '../button/themeButton.js'

const ThemeHandler = (props) => {
  const [theme, setTheme] = useState('theme-dark')

  useEffect(() => {
    updateDocument.updateClasses('body', theme)
    updateDocument.updateClasses('button', theme)
    updateDocument.updateClasses('panel', theme)
  })

  return (
    <div>
      {/* <p> Current Theme = {theme}</p> */}
      <ThemeButton
        value="theme-light"
        text="Set to Light Theme"
        updateTheme={setTheme}
      />
      <ThemeButton
        value="theme-dark"
        text="Set to Dark Theme"
        updateTheme={setTheme}
      />
    </div>
  )
}

export default ThemeHandler
