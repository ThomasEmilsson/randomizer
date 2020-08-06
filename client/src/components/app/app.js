import React, { useEffect } from 'react'
import './app.scss'
import '../themes.scss'
import ThemeUpdater from '../themeHandling/themeUpdater'
import Settings from '../home/settings'
import Welcome from '../welcome/welcome'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import stickyState from '../helpers/stickyHook'
import updateDocument from '../themeHandling/updateDocument'
import ThemeContext from '../helpers/themeContext'
import SignUp from '../signUp/signUp'
import SignIn from '../signIn/signIn'
import UserContext from '../helpers/userContext'
import Home from '../home/home'

const App = () => {
  const themeHook = stickyState('theme-dark', 'theme')
  const userHook = stickyState(
    { name: '', email: '', token: '', cookie: '' },
    'user'
  )

  useEffect(() => {
    localStorage.clear()
    updateDocument.updateClasses('body', themeHook[0])
    updateDocument.updateClasses('button', themeHook[0])
    updateDocument.updateClasses('.panel', themeHook[0])
  })

  return (
    <UserContext.Provider value={userHook}>
      <ThemeContext.Provider value={themeHook}>
        <Router>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/theme" component={ThemeUpdater} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/" component={Welcome} />
        </Router>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
