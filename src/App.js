import React, { Component } from 'react'
import './App.css'
import Button from './components/Button.js'
import Bulb from './components/Bulb.js'

class App extends Component{
  render(){
    return(
      <>
        <h1>Hello Echo!</h1>
        <h2> Josh's Lightbulb Challenge</h2>
        <Bulb/>
      </>
    )
  }
}
export default App
