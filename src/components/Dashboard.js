import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FooterDetails from './FooterDetails'
import Poll from './Poll'
class Dashboard extends Component {
  state = {
    showAnswered: false
  }

  handleAnswerChange = () => {
    const answer = !this.state.showAnswered
    this.setState(() => ({
      showAnswered: answer
    }));
  }

  toDetails = (id) => {
    const pollRoute = `/poll/${id}`
    this.props.history.push(pollRoute)
  }

  render () {
    let { showAnswered } = this.state
    let { answeredQuestions, unAnsweredQuestions, questions,users } = this.props
    const filteredQuestions = showAnswered ? answeredQuestions : unAnsweredQuestions
    const buttonBG = showAnswered ? 'bg-cerise-red-500' : ''
    const buttonSpacing = showAnswered ? 'translate-x-3' : ''
    const activeQuestion = showAnswered ? 'Check your answered questions' : 'Check some new questions'
    return (
      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl">{ activeQuestion }</p>
        <div
          className={`w-36 h-10 mx-auto mt-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${buttonBG}`}
          onClick={this.handleAnswerChange}
        >
          {showAnswered?<p className="text-white font-medium pl-4">Answered</p>: ''}
          <div className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out items-center ${buttonSpacing}`}/>
          {!showAnswered?<p className="text-white font-medium pl-1">Unanswered</p>: ''}
        </div>
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {filteredQuestions.map(id => (
            <Poll key={id} id={id} onClickFunction={this.toDetails} dimensions={'h-64 w-full'}
              cardText = {
                <p className="text-white font-normal">
                  {`Would you rather ${questions[id].optionOne.text} OR ${questions[id].optionTwo.text}?`}
                </p>
              }
              cardFooter = {
                <FooterDetails id={id} asker={users[questions[id].author]} />
              }
            />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}) {
  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const unAnsweredQuestions = questionIds.filter(question => !answeredQuestions.includes(question))
  return {
    answeredQuestions: answeredQuestions,
    unAnsweredQuestions: unAnsweredQuestions,
    questions,
    users
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard))