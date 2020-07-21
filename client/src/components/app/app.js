import React, { Component, useState, useEffect, createContext } from 'react'
import './app.scss'
import '../themes.scss'
import ThemeHandler from '../themeHandler/themeHandler.js'
import Welcome from '../welcome/welcome.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import stickyHook from '../helpers/stickyHook.js'
import updateDocument from '../themeHandler/updateDocument.js'
import ThemeContext from '../helpers/themeContext'
// import { StateProvider, store } from '../helpers/globalStore'

const App = () => {
  const themeHook = useState('theme-dark')

  useEffect(() => {
    updateDocument.updateClasses('body', themeHook[0])
    updateDocument.updateClasses('button', themeHook[0])
    updateDocument.updateClasses('.panel', themeHook[0])
  })

  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route path="/settings" component={ThemeHandler} />
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
