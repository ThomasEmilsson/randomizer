import React, { useContext, useEffect, useState, useRef } from 'react'
import './settings.scss'
import {
  updateName,
  updatePassword,
  deleteAccount,
  getPartners,
} from '../../api/requests'
import ThemeContext from '../helpers/themeContext'
import UserContext from '../helpers/userContext'
import updateDocument from '../themeHandling/updateDocument.js'
import ThemeUpdater from '../themeHandling/themeUpdater'
import { useHistory } from 'react-router-dom'

const Settings = () => {
  let history = useHistory()
  const [theme, setTheme] = useContext(ThemeContext)
  const [user, setUser] = useContext(UserContext)
  const firstClick = useRef(true)

  const [data, setData] = useState({ name: '', password: '', passwordTwo: '' })
  const [errorOne, setErrorOne] = useState('')
  const [errorTwo, setErrorTwo] = useState('')

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
          id: user.id,
        })
      }
    }
  }

  const changePassword = async (event) => {
    event.preventDefault()

    if (data.password === data.passwordTwo) {
      await updatePassword({
        password: data.password,
        token: user.token,
      })
    } else {
      setErrorTwo('passwords do not match')
    }
  }

  const displayDelete = () => {
    let button = document.getElementsByClassName('deleteButtonConfirm')[0].style
    let back = document.getElementsByClassName('deleteButton')[0]

    if (button.display === '' || button.display === 'none') {
      button.display = 'block'
      back.innerHTML = 'undo'
    } else {
      button.display = 'none'
      back.innerHTML = 'delete account'
    }
  }
  const handleAccountDelete = async (event) => {
    event.preventDefault()

    let button = document.getElementsByClassName('deleteButtonConfirm')[0]

    if (firstClick.current) {
      button.innerHTML = 'click here again to delete your account permanently'
      firstClick.current = false
    } else {
      let response = await deleteAccount({ id: user.id, token: user.token })
      if (response.status === 200) {
        setUser({
          name: '',
          email: '',
          token: '',
          id: '',
        })
        setTheme('theme-dark')
        history.push('/')
      }
    }
  }

  const managePartners = async (event) => {
    event.preventDefault()
    let response = await getPartners({ id: user.id, token: user.token })
    console.log(response)
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
                    change name
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
                <span className="form-errors">{errorTwo}</span>
                <button className="button-submit" type="submit">
                  change password
                </button>
              </div>
            </form>
          </div>
          <div className="delete-account">
            <div className="form-header">delete account</div>
            <p className="underline" />
            <div className="delete-account-button inputs">
              <button
                className="deleteButton"
                onClick={(e) => displayDelete()}
                name="name"
                placeholder="delete account"
              >
                delete account
              </button>
              <button
                className="deleteButtonConfirm"
                onClick={handleAccountDelete}
                name="name"
                placeholder="delete account"
              >
                are you sure you want to delete your account?
              </button>
            </div>
          </div>
        </div>
        <div className="column-two">
          <div className="manage-partners">
            <div className="form-header">manage partners</div>
            <p className="underline" />
            <button
              onClick={managePartners}
              name="name"
              placeholder="asdfasdfasdfhkj"
            >
              manage partners
            </button>
            {/* TODO: HERE */}
            {/* {partners} */}
          </div>
          <div className="change-theme">
            <div className="form-header">change theme</div>
            <p className="underline" />
            <ThemeUpdater />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
