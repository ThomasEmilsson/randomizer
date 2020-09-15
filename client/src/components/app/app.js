import React, { useEffect } from 'react'
import './app.scss'
import '../themes.scss'
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
    { name: '', email: '', token: '', id: '' },
    'user'
  )

  useEffect(() => {
    // localStorage.clear()
    updateDocument.updateClasses('body', themeHook[0])
    updateDocument.updateClasses('button', themeHook[0])
    updateDocument.updateClasses('.panel', themeHook[0])
  })

  return (
    <UserContext.Provider value={userHook}>
      <ThemeContext.Provider value={themeHook}>
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Router>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App
