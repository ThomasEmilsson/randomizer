import React, { useContext } from 'react'
import './settings.scss'

import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'

const Settings = () => {
  const [theme] = useContext(ThemeContext)
  const [user] = useContext(UserContext)

  return (
    <div className="settings">
      <div className={`title ${theme}`}> settings </div>
      <div className="contents">
        <div className="column-one">
          <div className="change-name">
            <form className="form-change-name" onSubmit={(e) => console.log(e)}>
              <label htmlFor="account-name">
                change account
                <br />
                <input
                  // value={data.name}
                  // onChange={handleNameChange}
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </label>
            </form>
          </div>
          <div className="change-password">
            <form
              className="form-change-password"
              onSubmit={(e) => console.log(e)}
            >
              <label htmlFor="account-password">
                change password
                <br />
                <input
                  // value={data.name}
                  // onChange={handleNameChange}
                  type="text"
                  name="password"
                  placeholder="password"
                />
              </label>
            </form>
          </div>
          <div className="delete-account">
            <label htmlFor="delete-account">
              delete account
              <br />
              <button
                // onClick={handleAccountDelete}
                name="name"
                placeholder="delete account"
              >
                delete account
              </button>
            </label>
          </div>
        </div>
        <div className="column-two">
          <div className="manage-partners">
            <label htmlFor="account-name">
              manage partners
              <br />
              <button
                // onClick={handleUpdatePartners}
                name="name"
                placeholder="asdfasdfasdfhkj"
              >
                manage partners
              </button>
            </label>
          </div>
          <div className="change-theme">
            <label htmlFor="account-name">
              Change Theme
              <br />
              <button
                // onClick={handleThemeChange}
                name="name"
                placeholder="asdfasdfasdfhkj"
              >
                Dark
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
