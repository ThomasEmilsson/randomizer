import React from 'react'
import './themeButton.scss'

const ThemeButton = (props) => {
  const { updateTheme } = props

  return (
    <button
      className={props.className}
      onClick={() => updateTheme(props.value)}
    />
  )
}

export default ThemeButton
