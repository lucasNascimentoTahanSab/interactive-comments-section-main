import React from 'react'
import Button from '../Button.js'

export default class SendButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()
  }

  render() {
    return (
      <button className={this.props.className} onClick={this._send.bind(this)}>
        {this.props.label}
      </button>
    )
  }

  _send() {
    this.button.execute(this.props.action)
  }
}