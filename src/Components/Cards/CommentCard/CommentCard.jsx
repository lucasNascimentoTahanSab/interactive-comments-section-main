import React from 'react'
import Button from '../../Buttons/Button.js'
import RankingButton from '../../Buttons/RankingButton/RankingButton.jsx'
import DetailsComment from '../../Comments/DetailsComment/DetailsComment.jsx'
import ReplyButton from '../../Buttons/ReplyButton/ReplyButton.jsx'
import DeleteButton from '../../Buttons/DeleteButton/DeleteButton.jsx'
import EditButton from '../../Buttons/EditButton/EditButton.jsx'

export default class CommentCard extends React.Component {
  constructor(props) {
    super(props)

    this.button = new Button()

    this.comment = React.createRef()
  }

  render() {
    return (
      <article className="">
        <div className="">
          <RankingButton
            plus={this._increasePositionInRanking.bind(this)}
            minus={this._decreasePositionInRanking.bind(this)} />
        </div>
        <div className="">
          <div className="">
            <DetailsComment comment={this.props.comment} />
            {this._replyButton()}
            {this._deleteButton()}
            {this._editButton()}
          </div>
          <div className="">
            <textarea ref={this.comment} className="" cols="30" rows="10" disabled></textarea>
          </div>
        </div>
      </article>
    )
  }

  _replyButton() {
    return this.props.replyAllowed ? <ReplyButton label="Reply" action={this._reply.bind(this)} /> : null
  }

  _deleteButton() {
    return this.props.deleteAllowed ? <DeleteButton label="Delete" action={this._delete.bind(this)} /> : null
  }

  _editButton() {
    return this.props.editAllowed ? <EditButton label="Edit" action={this._edit.bind(this)} /> : null
  }

  _increasePositionInRanking() {
    this.button.execute(this.props.increasePositionInRanking)
  }

  _decreasePositionInRanking() {
    this.button.execute(this.props.decreasePositionInRanking)
  }

  _reply() {
    this.button.execute(this.props.reply)
  }

  _delete() {
    this.button.execute(this.props.delete)
  }

  _edit() {
    this.comment.current.disabled = !this.comment.current.disabled
    this.button.execute(this.props.edit)
  }
}