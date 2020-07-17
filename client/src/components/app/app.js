import React, { Component } from 'react'
import './app.scss'
import '../themes.scss'
import Button from '../button/button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Button value="theme-dark" text="Change To Dark Theme"></Button>
        <Button value="theme-light" text="Change To Light Theme"></Button>
      </div>
    )
  }
}

export default App
