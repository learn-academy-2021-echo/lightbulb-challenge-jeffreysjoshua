import React, { Component } from 'react'

class Button extends Component{

  // import props and create state object with two key/ values (one for color, and one for off/on)
  constructor(props) {
    super(props);
    this.state = {
      onOrOff: "off",
      color: "white"
    }
  }
  // create changeIt function to toggle the button
  changeIt = () => {
  // set button to off, if it is on, and change color
    if (this.state.onOrOff === "on"){
      this.setState({onOrOff: "off", color: "white"})
  // set button to on, if it is off, and change color
    } else {
      this.setState({onOrOff: "on", color: "yellow"})
    }
  }
  // render and return button with changeIt function applied on "onClick"
  render(){
    return(
      <>
        <button
        id= "Button"
        onClick={this.changeIt}
        style={{background: this.state.color}}
        >
        {this.state.onOrOff}
        </button>
      </>
    )
  }
}

export default Button
