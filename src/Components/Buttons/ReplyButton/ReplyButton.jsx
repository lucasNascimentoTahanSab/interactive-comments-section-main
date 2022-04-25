import React from 'react'
import Button from '../Button.js'

export default class ReplyButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()
  }

  render() {
    return (
      <button className="" onClick={this._reply.bind(this)}>
        <img src="" alt="" />
        <span>{this.props.label}</span>
      </button>
    )
  }

  _reply() {
    this.button.execute(this.props.action)
  }
}