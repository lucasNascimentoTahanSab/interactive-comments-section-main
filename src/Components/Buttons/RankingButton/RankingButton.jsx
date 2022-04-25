import React from 'react'
import Button from '../Button.js'
import PlusButton from '../PlusButton/PlusButton.jsx'
import MinusButton from '../MinusButton/MinusButton.jsx'

export default class RankingButton extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()

    this.state = { value: props.value }
  }

  render() {
    return (
      <div className="">
        <PlusButton action={this._plus.bind(this)}></PlusButton>
        <span>{this.state.value}</span>
        <MinusButton action={this._minus.bind(this)}></MinusButton>
      </div>
    )
  }

  _plus() {
    this.setState({ value: this.state.value + 1 })
    this.button.execute(this.props.plus)
  }

  _minus() {
    this.setState({ value: this.state.value - 1 })
    this.button.execute(this.props.minus)
  }
}