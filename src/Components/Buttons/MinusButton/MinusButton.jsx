import React from 'react'
import Button from '../Button.js'

export default class MinusButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()
  }

  render() {
    return (
      <button className="" onClick={this._minus.bind(this)}>
        <img src="" alt="" />
        <span>{this.props.label}</span>
      </button>
    )
  }

  _minus() {
    this.button.execute(this.props.action)
  }
}