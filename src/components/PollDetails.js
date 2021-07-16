import React, {Component} from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import Poll from './Poll'

// TODO add statistics tab
class PollDetails extends Component {
  getFirstQuestion = (name) => {
    alert(this.props.questions[name].optionOne.text)
  }
  getSecondQuestion = (name) => {
    alert(this.props.questions[name].optionTwo.text)
  }
  render () {
    const id = this.props.match.params.id
    const { questions } = this.props
    const questionOne = questions[id].optionOne.text
    const questionTwo = questions[id].optionTwo.text
    return (
      <div>
        <p className="font-bold text-2xl">Would you rather?</p>
        <div className="flex flex-wrap gap-4 content-center justify-center my-20">
          <Poll id={id} onClickFunction={this.getFirstQuestion} dimensions={'h-96 w-full'}
            cardText = {
              <p className="text-white font-normal text-xl">
                {questionOne}
              </p>
            }
          />
          <div className="flex flex-wrap content-center h-14 w-14 bg-gray-200 shadow font-medium px-4 rounded-full my-auto">
            OR
          </div>
          <Poll id={id} onClickFunction={this.getSecondQuestion} dimensions={'h-96 w-full'}
            cardText = {
              <p className="text-white font-normal text-xl">
                {questionTwo}
              </p>
            }
          />
        </div>
      </div>
    )
  }
}
function mapStateToProps ({questions}) {
  return {
    questions
  }
}

export default withRouter(connect(mapStateToProps)(PollDetails))