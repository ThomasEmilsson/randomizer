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
            <div className="create-date-input">
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
            <div className="create-date-input">
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
            <div className="create-date-input">
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
            {/* tags */}
            <div className="tag-list">
              <div>
                <input type="checkbox" id="romantic" name="romantic" />
                <label for="romantic">romantic</label>
              </div>
              <div>
                <input type="checkbox" id="cozy" name="cozy" />
                <label for="cozy">cozy</label>
              </div>
              <div>
                <input type="checkbox" id="fun" name="fun" />
                <label for="fun">fun</label>
              </div>
              <div>
                <input type="checkbox" id="cheeky" name="cheeky" />
                <label for="cheeky">cheeky</label>
              </div>
              <div>
                <input type="checkbox" id="adventure" name="adventure" />
                <label for="adventure">adventure</label>
              </div>
              <div>
                <input type="checkbox" id="casual" name="casual" />
                <label for="casual">casual</label>
              </div>
              <div>
                <input type="checkbox" id="fancy" name="fancy" />
                <label for="fancy">fancy</label>
              </div>
              <div>
                <input type="checkbox" id="cheap" name="cheap" />
                <label for="cheap">cheap</label>
              </div>
              <div>
                <input type="checkbox" id="pricey" name="pricey" />
                <label for="pricey">pricey</label>
              </div>
              <div>
                <input type="checkbox" id="new" name="new" />
                <label for="new">new</label>
              </div>
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
