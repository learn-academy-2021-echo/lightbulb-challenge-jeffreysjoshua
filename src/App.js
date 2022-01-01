import React, { Component } from 'react'
import './App.css'
import Bulb from './components/Bulb.js'
import CreateRemoveBulbs from './components/CreateRemoveBulbs.js'

class App extends Component{
  render(){
    return(
      <>
        <h1>Josh's Electric Lightbulbs!</h1>
        <CreateRemoveBulbs/>
      </>
    )
  }
}
export default App
