import React, { createContext, useReducer } from 'react'

const initialState = {
  theme: 'theme-dark',
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_THEME':
        const newState = state.theme // do something with the action
        return newState
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
