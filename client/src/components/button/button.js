import React, { useState } from 'react'
import './button.scss'

const Button = (props) => {
  const [theme, setTheme] = useState('theme-default')

  return (
    <div>
      <button
        onClick={(e) => setTheme(e.target.value)}
        value={props.value}
        className={theme}
      >
        {props.text}
      </button>
    </div>
  )
}

export default Button
