import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class Card extends Component {
  render () {
    const { question, asker } = this.props
    return (
      <div className="w-1/4">
        <div className="flex flex-wrap content-center h-64 bg-gradient-to-b from-cerise-red-600 to-cerise-red-500 shadow-lg rounded-t-lg cursor-pointer">
          <p className="text-white font-normal px-4 my-auto">
            {`Would you rather ${question.optionOne.text} OR ${question.optionTwo.text}?`}
          </p>
        </div>
        <div className="h-20 flex flex-wrap shadow-lg px-4 content-center gap-5 bg-white rounded-b-lg content-center">
          <Avatar avatarURL={asker.avatarURL} dimensions={'h-12 w-12'}/>
          <div>
            <p className="text-gray-700 text-sm font-extralight my-auto text-left">Asked by</p>
            <p className="text-gray-700 text-base font-light my-auto text-left">{asker.name}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, props) {
  const question = questions[props.id]
  const askerId = question.author
  const asker = users[askerId]
  return {
    question,
    asker
  }
}

export default connect(mapStateToProps)(Card)