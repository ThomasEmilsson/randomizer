import React, { Component } from 'react'
import './app.scss'
import '../themes.scss'
import ThemeHandler from '../themeHandler/themeHandler.js'
import Welcome from '../welcome/welcome.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Hello</h1> */}
        {/* <ThemeHandler style={{ display: 'none' }} /> */}
        <Welcome />
      </div>
    )
  }
}

export default App
