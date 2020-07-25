import React, { useContext, useEffect } from 'react'
import ThemeButton from '../button/themeButton.js'
import ThemeContext from '../helpers/themeContext'
// import updateDocument from '../themeHandling/updateDocument'
import { Link } from 'react-router-dom'

const ThemeUpdater = (props) => {
  const [theme, setTheme] = useContext(ThemeContext)

  // console.log(theme)
  // useEffect(() => {
  //   updateDocument.updateClasses('body', theme)
  //   updateDocument.updateClasses('button', theme)
  //   updateDocument.updateClasses('.panel', theme)
  // })

  return (
    <div>
      <p>{theme}</p>
      <Link to="/">
        {' '}
        <button className="button-back">Go Back</button>
      </Link>
      <br />
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

export default ThemeUpdater
