import React from 'react'
import './button.scss'

const Button = (props) => {
  const { theme } = props
  function changeToTheme(e) {
    e.preventDefault()
  }
  return (
    <div>
      <button onClick={changeToTheme} className={props.theme}>
        {props.text}
      </button>
    </div>
  )
}

export default Button
