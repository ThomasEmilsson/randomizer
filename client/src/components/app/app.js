import React, { Component } from 'react'
import './app.scss'
import '../themes.scss'
import ThemeHandler from '../themeHandler/themeHandler.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <ThemeHandler />
      </div>
    )
  }
}

export default App
