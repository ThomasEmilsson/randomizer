import React, { useContext, useState } from 'react'
import ThemeContext from '../helpers/themeContext'
import './signIn.scss'
import { signIn } from '../../api/authentication.js'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const [theme] = useContext(ThemeContext)
  const [data, setData] = useState({
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
    if (data.email == '') {
      setError('email missing')
    } else if (data.password == '') {
      setError('password missing')
    } else {
      let res = await signIn(data)
      if (res.token) console.log(res.token)
      else setError('Incorrect email or password')
    }
  }

  return (
    <div className="grid-container">
      <div className={`panel ${theme}`}>
        <h1> sign in form </h1>
        <form className="form-signin" onSubmit={(e) => handleSubmit(e)}>
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
                type="password"
                name="password"
                placeholder="password"
              />
            </label>
          </section>
          <section className="section-submit">
            <button className={`button-signin ${theme}`} type="submit">
              sign in
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
  )
}

export default SignIn
