import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'

class Dashboard extends Component {
  // TODO add loader
  // GET the authed user to know which ones are replied already
  // TODO get questions and filter by current state
  // TODO pass question info to the cards
  // TODO card should render the question and its details based on the Id
  state = {
    showAnswered: true
  }
  /**
   * changes the value of the filter variable
   */
  handleAnswerChange = () => {
    const answer = !this.state.showAnswered
    this.setState(() => ({
      showAnswered: answer
    }));
  }

  render () {
    let { showAnswered } = this.state
    let { questionIds } = this.props
    const buttonBG = showAnswered ? 'bg-cerise-red-500' : ''
    const buttonSpacing = showAnswered ? 'translate-x-3' : ''
    const activeQuestion = showAnswered ? 'Check your answered questions' : 'Check some new questions'
    return (
      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl">{ activeQuestion }</p>
        <div
          className={`w-36 h-10 mx-auto mt-4 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${buttonBG}`}
          onClick={this.handleAnswerChange}
        >
          {showAnswered?<p className="text-white font-medium pl-4">Answered</p>: ''}
          <div className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out items-center ${buttonSpacing}`}/>
          {!showAnswered?<p className="text-white font-medium pl-1">Unanswered</p>: ''}
        </div>
        <div className="flex flex-wrap gap-10 justify-center my-10">
          {questionIds.map(id => (
            <Card key={id} id={id} avatarUrl = {'https://pbs.twimg.com/media/EUZXL2zUcAEONHS.jpg'}/>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}) {
  // const answeredQuestions = authedUser.questions
  // const unAnsweredQuestions = Object.keys(questions).filter(x => !answeredQuestions.includes(x))
  return {
    users,
    // answeredQuestions: answeredQuestions,
    // unAnsweredQuestions: unAnsweredQuestions,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard);