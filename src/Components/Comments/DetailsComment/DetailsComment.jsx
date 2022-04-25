import React from 'react'
import PhotoUser from '../../Users/PhotoUser/PhotoUser.jsx'

export default class DetailsComment extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <PhotoUser photo={this.props.comment.user.image.png} />
        <span className="">{this.props.comment.user.username}</span>
        <span className="">{this.props.comment.createdAt}</span>
      </div>
    )
  }
}