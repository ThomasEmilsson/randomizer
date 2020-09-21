import React, { useContext, useState } from 'react'
import ThemeContext from '../helpers/themeContext'
import './createDate.scss'

const CreateDate = () => {
  const [theme] = useContext(ThemeContext)

  const createNewDate = async (event) => {}
  const [errorOne, setErrorOne] = useState('')
  const [errorTwo, setErrorTwo] = useState('')
  const [errorThree, setErrorThree] = useState('')

  return (
    <div className="create-date">
      <div className={`title ${theme}`}> create new date</div>
      <div className="contents">
        <form
          className="form-create-new-date"
          onSubmit={(e) => createNewDate(e)}
        >
          <div className="column-one">
            <div className="change-name-input inputs">
              card title
              <input
                readOnly
                value=""
                className={`${theme}`}
                type="text"
                name="card-title"
                placeholder="card title"
              />
            </div>
            <div className="change-name-input inputs">
              description
              <input
                readOnly
                value=""
                className={`${theme}`}
                type="text"
                name="description"
                placeholder="description"
              />
            </div>
            <div className="change-name-input inputs">
              things to talk about
              <input
                readOnly
                value=""
                className={`${theme}`}
                type="text"
                name="topics"
                placeholder="things to talk about"
              />
            </div>
          </div>
          <div className="column-two">
            <div className="change-name-input inputs">
              tags
              {/* <input type="checkbox">romantic</input> */}
              <input
                type="checkbox"
                id="romantic"
                name="romantic"
                value="romantic"
              />
              <label for="romantic"> romantic</label>
            </div>
          </div>
          <div className="create-new-date-button-section">
            <button className="button-submit" type="submit">
              create new date
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateDate
