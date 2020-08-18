import React, { useContext, useEffect, useState } from 'react'
import './settings.scss'
import { updateName } from '../../api/requests'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import ThemeButton from '../themeHandling/themeButton'
import updateDocument from '../themeHandling/updateDocument.js'

const Settings = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const [user, setUser] = useContext(UserContext)

  const [data, setData] = useState({ name: '', password: '', passwordTwo: '' })
  const [errorOne, setErrorOne] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    updateDocument.updateClasses('body', theme)
    updateDocument.updateClasses('button', theme)
    updateDocument.updateClasses('.panel', theme)
    updateDocument.updateClasses('.form-header', theme)
  })

  const changeName = async (event) => {

    event.preventDefault()
    if (data.name === '') {
      setErrorOne('name missing')
    } else {
      setErrorOne('')

      let response = await updateName({ name: data.name, token: user.token })

      if (response.status === 200) {
        setUser({
          name: data.name,
          email: user.email,
          token: user.token,
        })
      }

    }
  }

  const changePassword = async (event) => {
    event.preventDefault()
    console.log(data.password + ' --- ' + data.passwordTwo)
  }



  return (
    <div className="settings">
      <div className={`title ${theme}`}> settings </div>
      <div className="contents">
        <div className="column-one">
          <div className="change-name">
            <div className="form-header">change account</div>
            <p className="underline" />
            <form className="form-change-name" onSubmit={(e) => changeName(e)}>
              <div className="change-name-section">
                <div className="change-name-input inputs">
                  current name:
                  <input
                    readOnly
                    value={user.name}
                    className={`${theme}`}
                    type="text"
                    name="current-name"
                    placeholder="username"
                  />
                </div>
                <div className="change-name-input inputs">
                  new name:
                  <input
                    className={`${theme}`}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </div>
                <div className="change-name-input inputs">
                  <span className="form-errors">{errorOne}</span>
                  <button className="button-submit" type="submit">
                    Change Name
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="change-password">
            <div className="form-header">change password</div>
            <p className="underline" />
            <form
              className="form-change-password"
              onSubmit={(e) => changePassword(e)}
            >
              <div className="change-password-input inputs">
                new password:
                <input
                  className={`${theme}`}
                  onChange={handleChange}
                  type="text"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="change-password-input inputs">
                re-enter password:
                <input
                  className={`${theme}`}
                  onChange={handleChange}
                  type="text"
                  name="passwordTwo"
                  placeholder="password"
                />
              </div>
              <div className="change-password-input inputs">
                <div />
                <button className="button-submit" type="submit">
                  Change Password
                </button>
              </div>
            </form>
          </div>
          <div className="delete-account">
            <div className="form-header">delete account</div>
            <p className="underline" />

            <button
              // onClick={handleAccountDelete}
              name="name"
              placeholder="delete account"
            >
              delete account
            </button>
          </div>
        </div>
        <div className="column-two">
          <div className="manage-partners">
            <div className="form-header">manage partners</div>
            <p className="underline" />
            <button
              // onClick={handleUpdatePartners}
              name="name"
              placeholder="asdfasdfasdfhkj"
            >
              manage partners
            </button>
          </div>
          <div className="change-theme">
            <div className="form-header">change theme</div>
            <p className="underline" />
            <div className="buttons">
              <ThemeButton
                className="dark-theme"
                value="theme-dark"
                updateTheme={setTheme}
              />
              <ThemeButton
                className="light-theme"
                value="theme-light"
                updateTheme={setTheme}
              />
              <ThemeButton
                className="red-theme"
                value="theme-red"
                updateTheme={setTheme}
              />
              <ThemeButton
                className="brown-theme"
                value="theme-brown"
                updateTheme={setTheme}
              />
              <ThemeButton
                className="teal-theme"
                value="theme-teal"
                updateTheme={setTheme}
              />
              <ThemeButton
                className="blue-theme"
                value="theme-blue"
                updateTheme={setTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
