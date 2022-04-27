import React, { useContext } from 'react'
import UserContext from '../../../Context/UserContext/UserContext.js'
import PhotoUser from '../../Users/PhotoUser/PhotoUser.jsx'

export default function DetailsComment(props) {
  const { currentUser } = useContext(UserContext)

  function _showIfCurrentUser() {
    return currentUser.username === props.comment.user.username
      ? (<span className="">you</span>)
      : null
  }

  return (
    <div className="">
      <PhotoUser photo={props.comment.user.image.png} />
      <span className="">{props.comment.user.username}</span>
      {_showIfCurrentUser()}
      <span className="">{props.comment.createdAt}</span>
    </div>
  )
}