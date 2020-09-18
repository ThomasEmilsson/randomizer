import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import './shuffle.scss'

const Shuffle = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className="shuffle">
      <div className={`title ${theme}`}> shuffle</div>
    </div>
  )
}

export default Shuffle
