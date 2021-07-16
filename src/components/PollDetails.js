import React, {Component} from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import Poll from './Poll'

// TODO register answer action
// TODO create component to
class PollDetails extends Component {
  getFirstQuestion = (name) => {
    alert(this.props.questions[name].optionOne.text)
  }
  getSecondQuestion = (name) => {
    alert(this.props.questions[name].optionTwo.text)
  }
  render () {
    const id = this.props.match.params.id
    const { questions, users } = this.props
    const questionAuthor = questions[id].author
    const questionOne = questions[id].optionOne.text
    const questionTwo = questions[id].optionTwo.text
    return (
      <div className="flex flex-col justify-center content-center">
        <div className="shadow-2xl mt-10 w-2/3 mx-auto my-auto bg-white rounded-b-lg py-12">
          <p className="font-bold text-2xl mb-10">{questionAuthor} asks would you rather?</p>
          <div className="flex flex-wrap gap-4 content-center justify-center">
            <Poll id={id} onClickFunction={this.getFirstQuestion} dimensions={'h-96 w-full'} layout={'w-2/5'}
              cardText = {
                <p className="text-white font-normal text-xl">
                  {questionOne}
                </p>
              }
            />
              <Poll id={id} onClickFunction={this.getSecondQuestion} dimensions={'h-96 w-full'} layout={'w-2/5'}
                cardText = {
                  <p className="text-white font-normal text-xl">
                    {questionTwo}
                  </p>
                }
              />
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps ({questions, users}) {
  return {
    questions,
    users
  }
}

export default withRouter(connect(mapStateToProps)(PollDetails))