import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import './createDate.scss'

const CreateDate = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className="create-date">
      <div className={`title ${theme}`}> create new date</div>
    </div>
  )
}

export default CreateDate
