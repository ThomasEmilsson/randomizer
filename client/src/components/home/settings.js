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
  })

  return (
    <div className="settings">
      <div className={`title ${theme}`}> settings </div>
      <div className="contents">
        <div className="column-one">
          <div className="change-name">
            <form className="form-change-name" onSubmit={(e) => console.log(e)}>
              <label htmlFor="account-name">change account</label>
              <p className="underline" />
              <input
                // value={data.name}
                // onChange={handleNameChange}
                type="text"
                name="name"
                placeholder="name"
              />
            </form>
          </div>
          <div className="change-password">
            <form
              className="form-change-password"
              onSubmit={(e) => console.log(e)}
            >
              <label htmlFor="account-password">change password</label>
              <p className="underline" />
              <input
                // value={data.name}
                // onChange={handleNameChange}
                type="text"
                name="password"
                placeholder="password"
              />
            </form>
          </div>
          <div className="delete-account">
            <label htmlFor="delete-account">delete account</label>
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
            <label htmlFor="account-name">manage partners</label>
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
            <label htmlFor="account-name">change theme</label>
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
