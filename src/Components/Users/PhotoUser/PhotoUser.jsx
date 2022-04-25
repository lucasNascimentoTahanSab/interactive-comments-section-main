import React from 'react'

export default class PhotoUser extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <img src={this.props.photo} alt="" />
      </div>
    )
  }
}