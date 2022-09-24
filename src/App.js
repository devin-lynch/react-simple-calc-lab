import React, { Component } from 'react'
import Calculator from './Calculator'


export default class App extends Component {

  // try to always keep state/functions in app.js! (top level)
  state = {
    numOne: '',
    numTwo: '',
    sum: ''
}

setNum = (e, num) => {
  console.log(e.target)
  this.setState({ [e.target.name]: e.target.value });

  console.log(this.state.numOne)
}

addition = (numOne, numTwo) => {
  return numOne + numTwo
}

getSum = e => {
  e.preventDefault()
  console.log(this.state.numOne, this.state.numTwo)

  this.setState({
// parseInt to change from string to integer 
sum: this.addition(parseInt(this.state.numOne), parseInt(this.state.numTwo))
  }
  )
  console.log(this.state)
}

  render() {
    return (
      <div>
        <Calculator 
        numOne={this.state.numOne}
        numTwo={this.state.numTwo}
        setNum={this.setNum}
        getSum={this.getSum}
        sum={this.state.sum}
        />
      </div>
    )
  }
}
