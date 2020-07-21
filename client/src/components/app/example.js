import React, { useContext } from 'react'
import { store } from '../helpers/globalStore.js'

const ExampleComponent = () => {
  const globalState = useContext(store)
  const { dispatch } = globalState
  console.log(globalState)
  dispatch({ type: 'action description' })

  return (
    <div>
      <h2>hello</h2>
    </div>
  )
}

export default ExampleComponent
