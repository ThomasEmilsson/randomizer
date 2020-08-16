import React, { useContext, useState } from 'react'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import './signUp.scss'
import { signUp } from '../../api/authentication.js'
import { Link, useHistory } from 'react-router-dom'

const SignUp = () => {
  let history = useHistory()
  const [theme] = useContext(ThemeContext)
  const [user, setUser] = useContext(UserContext)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (data.name === '') {
      setError('name required')
    } else if (data.email === '') {
      setError('email required')
    } else if (data.password === '') {
      setError('password required')
    } else {
      let res = await signUp(data)
      if (res.token) {
        setUser({ name: data.name, email: data.email, token: res.token })
        history.push('/home')
      } else {
        setError('something went wrong, try again')
      }
    }
  }

  return (
    <div className="sign-up">
      <div className="grid-container">
        <div className={`panel ${theme}`}>
          <h1> sign up form </h1>
          <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
            <section className="section-name">
              <label htmlFor="name">
                name:
                <input
                  value={data.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </label>
            </section>
            <section className="section-email">
              <label htmlFor="email">
                email:
                <input
                  value={data.email}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  placeholder="email"
                />
              </label>
            </section>
            <section className="section-password">
              <label htmlFor="password">
                password:
                <input
                  value={data.password}
                  onChange={handleChange}
                  type="text"
                  name="password"
                  placeholder="password"
                />
              </label>
            </section>
            <section className="section-submit">
              <button className={`button-signup ${theme}`} type="submit">
                sign up
              </button>
            </section>
          </form>
          <span className="form-errors">{error}</span>
          <Link to="/">
            {' '}
            <button className="button-back">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
