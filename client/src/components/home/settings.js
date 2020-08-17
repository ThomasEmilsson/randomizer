import React, { useContext, useEffect } from 'react'
import './settings.scss'

import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import ThemeButton from '../themeHandling/themeButton'
import updateDocument from '../themeHandling/updateDocument.js'

const Settings = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)

  useEffect(() => {
    updateDocument.updateClasses('body', theme)
    updateDocument.updateClasses('button', theme)
    updateDocument.updateClasses('.panel', theme)
    updateDocument.updateClasses('.form-header', theme)
  })

  const changeName = (event) => {
    console.log(event.target.value)
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
                <div className="change-name-input">
                  current name:
                  <input
                    readOnly
                    value={user.name}
                    className={`${theme}`}
                    type="text"
                    name="name"
                    placeholder="username"
                  />
                </div>
                <div className="change-name-input">
                  new name:
                  <input
                    className={`${theme}`}
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="change-password">
            <form
              className="form-change-password"
              onSubmit={(e) => console.log(e)}
            >
              <div className="form-header">change password</div>

              <p className="underline" />
              <div className="change-password-input">
                new password:
                <input
                  className={`${theme}`}
                  type="text"
                  name="name"
                  placeholder="password"
                />
              </div>
              <div className="change-password-input">
                re-enter password:
                <input
                  className={`${theme}`}
                  type="text"
                  name="name"
                  placeholder="password"
                />
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
