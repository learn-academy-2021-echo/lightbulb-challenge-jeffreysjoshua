import React, { Component } from 'react'
import Bulb from './Bulb.js'

class CreateRemoveBulbs extends Component{

// found this method online. Seems to perform the same function as:
// constructor(props) / super(props)
state = {
  bulbArray: []
}

// create function to add new lightbulb to the bulbArray.
// use spread operator, and import the Bulb component into the array
  newBulb = () => {
    this.setState({ bulbArray: [...this.state.bulbArray, <Bulb />]})
  }

// create function to remove a Bulb component from bulbArray, when called
// set function to remove bulb if length of array is >=0. No need for else statement.
  removeBulb = () => {
    if (this.state.bulbArray.length >= 0) {
     let newArray = [...this.state.bulbArray]
      newArray.pop()
      this.setState({ bulbArray: newArray})
    }
  }
  // render and return buttons with functions called on "onClick"
  // create id for buttons to style in CSS
  render(){
    return(
      <>
        <button id= "NewBulb" onClick={this.newBulb} >
          Create Additional Bulb ! </button>
        <button id= "LessBulb" onClick={this.removeBulb} >
          Subtract Existing Bulb ! </button>
          {this.state.bulbArray}
      </>
    )
  }
}

export default CreateRemoveBulbs
