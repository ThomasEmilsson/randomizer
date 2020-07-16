import React, { Component } from 'react'
import './app.scss'
import '../themes.scss'
import Button from '../button/button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Button theme="default" text="Change To Dark Theme"></Button>
      </div>
    )
  }
}

export default App
