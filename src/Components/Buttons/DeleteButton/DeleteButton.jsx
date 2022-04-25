import React from 'react'
import Button from '../Button.js'

export default class DeleteButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()
  }

  render() {
    return (
      <button className="" onClick={this._delete.bind(this)}>
        <img src="" alt="" />
        <span>{this.props.label}</span>
      </button>
    )
  }

  _delete() {
    this.button.execute(this.props.action)
  }
}