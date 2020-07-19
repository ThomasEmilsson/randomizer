import React from 'react'
import './themeButton.scss'

const ThemeButton = (props) => {
  const { updateTheme } = props

  return (
    <div>
      <button onClick={() => updateTheme(props.value)}>{props.text}</button>
    </div>
  )
}

export default ThemeButton
