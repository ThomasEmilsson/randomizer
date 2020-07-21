import React, { useState, useEffect } from 'react'
import './app.scss'
import '../themes.scss'
import ThemeUpdater from '../themeHandling/themeUpdater.js'
import Welcome from '../welcome/welcome.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import stickyHook from '../helpers/stickyHook.js'
import updateDocument from '../themeHandling/updateDocument.js'
import ThemeContext from '../helpers/themeContext'

const App = () => {
  const themeHook = stickyHook(useState('theme-dark'))

  useEffect(() => {
    updateDocument.updateClasses('body', themeHook[0])
    updateDocument.updateClasses('button', themeHook[0])
    updateDocument.updateClasses('.panel', themeHook[0])
  })

  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route path="/settings" component={ThemeUpdater} />
      </Router>
    </ThemeContext.Provider>
  )
}

export default App
