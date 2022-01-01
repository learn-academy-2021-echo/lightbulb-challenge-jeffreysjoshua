import React, { Component } from 'react'

// create objects with pictures stored as the values for the keys
const pictures = {
  lightOn: "https://cdn.pixabay.com/photo/2013/07/12/14/34/light-148483_1280.png",
  lightOff: "https://www.freeiconspng.com/uploads/bulb-off-icon-25.png"
}

const switches = {
  switchOn: "https://cdn-icons-png.flaticon.com/128/889/889727.png",
  switchOff: "https://cdn-icons-png.flaticon.com/128/889/889731.png"
}

class Bulb extends Component{

    constructor(props) {
    super(props);
    this.state = {
    open: false
    }
  }

// create function to change the state value of "open" from true to false
  changeImage = () => {
   this.setState(value => ({open: !value.open}))
  }

// create two ternary functions to have images of switch and bulb toggle
  getImage = () => this.state.open ? 'lightOn' : 'lightOff'
  getSwitch = () => this.state.open ? 'switchOn' : 'switchOff'

  render(){
    const exactImage = this.getImage();
    const exactSwitch = this.getSwitch();
// return the images and create id tag for styling in css
    return(
      <>
        <img id= "Bulb" src={pictures[exactImage]} />
        <img id= "Switch" src={switches[exactSwitch]} onClick={this.changeImage} />
      </>
    )
  }
}

export default Bulb
