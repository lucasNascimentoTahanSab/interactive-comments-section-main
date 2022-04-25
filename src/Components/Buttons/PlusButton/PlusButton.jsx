import React from 'react'
import Button from '../Button.js'

export default class PlusButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()
  }

  render() {
    return (
      <button className="" onClick={this._plus.bind(this)}>
        <img src="" alt="" />
      </button>
    )
  }

  _plus() {
    this.button.execute(this.props.action)
  }
}