import React, { useEffect, useContext } from 'react'
import './themeButton.scss'
import ThemeContext from '../helpers/themeContext'

const ThemeButton = (props) => {
  const { updateTheme } = props
  const [theme] = useContext(ThemeContext)

  return (
    <button
      className={`${props.className} ${theme == props.value ? 'selected' : ''}`}
      onClick={(e) => {
        updateTheme(props.value)
      }}
    />
  )
}

export default ThemeButton
