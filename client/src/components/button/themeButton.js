import React, { useState, useEffect } from 'react'
import './themeButton.scss'
import stuff from '../themes.scss'

const ThemeButton = (props) => {
  const [theme, setTheme] = useState('theme-light')

  return (
    <div>
      <button onClick={(e) => setTheme(e.target.value)} value={props}>
        {props.text}
      </button>
    </div>
  )
}

export default ThemeButton
