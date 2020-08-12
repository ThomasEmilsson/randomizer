import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'

const CardList = (props) => {
  const datesList = props.dates
  const [theme] = useContext(ThemeContext)

  const [user] = useContext(UserContext)
  return (
    <div>
      <div className={`title ${theme}`}>date cards</div>
      <div className="cards">
        {datesList.map((idea) => (
          <div key={idea.name} className={`card-date ${theme}`}>
            <p>{idea.name}</p>
            <p>{user.name === '' ? ' blank ' : 'by ' + user.email}</p>
          </div>
        ))}
      </div>{' '}
      */
    </div>
  )
}

export default CardList
