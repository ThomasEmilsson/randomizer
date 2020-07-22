import React, { useContext } from 'react'
import ThemeContext from '../helpers/themeContext'
import './testSignUp.scss'
import test from '../../api/requests.js'

const TestSignUp = () => {
  const [theme] = useContext(ThemeContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    test.testPost()
  }
  return (
    <div className="grid-container">
      <div className="panel">
        <h1> sign up form </h1>
        <form className="form-signup" onSubmit={(e) => handleSubmit(e)}>
          <section className="section-name">
            <label htmlFor="name">
              name:
              <input type="text" name="name" placeholder="name" />
            </label>
          </section>
          <section className="section-email">
            <label htmlFor="email">
              email:
              <input type="text" name="email" placeholder="email" />
            </label>
          </section>
          <section className="section-password">
            <label htmlFor="password">
              password:
              <input type="text" name="email" placeholder="password" />
            </label>
          </section>
          <section className="section-submit">
            <button className={`button-signup ${theme}`} type="submit">
              sign up
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}

export default TestSignUp
