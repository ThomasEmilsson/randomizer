import React, { useState, useEffect, useContext } from 'react'
import updateDocument from './updateDocument.js'
import ThemeButton from '../button/themeButton.js'
import stickyHook from '../helpers/stickyHook.js'
import ThemeContext from '../helpers/themeContext'
import { Link } from 'react-router-dom'

const ThemeHandler = (props) => {
  // const [theme, setTheme] = useContext(ThemeContext)
  const [theme, setTheme] = useContext(ThemeContext)
  // const [theme, setTheme] = stickyHook('theme-dark')
  // const useThemeContext = React.useContext(ThemeContext)

  // console.log(useThemeContext.toString())
  // const { theme, setTheme } = useThemeContext()
  // // useEffect(() => {
  // //   updateDocument.updateClasses('body', theme)
  // //   updateDocument.updateClasses('button', theme)
  // //   updateDocument.updateClasses('.panel', theme)
  // // })

  return (
    <div>
      <p>{theme}</p>

      <Link to="/">
        {' '}
        <button className="button-back">Go Back</button>
      </Link>
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
