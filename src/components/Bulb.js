import React, { Component } from 'react'

// create objects with pictures stored as the values for the keys
const pictures = {
  lightOn: "https://cdn.pixabay.com/photo/2013/07/12/14/34/light-148483_1280.png",
  lightOff:"https://www.clipartmax.com/png/middle/34-340495_light-bulb-off-clipart.png"
}

const switches = {
  switchOn: "https://cdn-icons-png.flaticon.com/128/889/889727.png",
  switchOff: "https://cdn-icons-png.flaticon.com/128/889/889731.png"
}

class Bulb extends Component{

    constructor(props) {
    super(props);
    this.state = {
    open: true
    }
  }

// create function to change the state value of "open" from true to false
  changeImage = () => {
   this.setState(value => ({open: !value.open}))
  }

// create two functions to have images of switch and bulb toggle
  getImage = () => this.state.open ? 'lightOn' : 'lightOff'
  getSwitch = () => this.state.open? 'switchOn' : 'switchOff'

  render(){
    const exactImage = this.getImage();
    const exactSwitch = this.getSwitch();
// return the images and create id tag for sizing in css
    return(
      <>
        <img id= "Bulb" style={{width: '250px'}} src={pictures[exactImage]} />
        <img id= "Switch" style={{width: '150px'}} src={switches[exactSwitch]} onClick={this.changeImage} />
      </>
    )
  }
}

export default Bulb
