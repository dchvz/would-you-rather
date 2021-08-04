import React, {Component} from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import { handleAddAnswer } from '../actions/users'
import Avatar from './Avatar'
import Poll from './Poll'

class PollDetails extends Component {
  state = {
    selectedOption: ''
  }

  capitalize = word => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  register = (item) => {
    const { dispatch, question } = this.props
    dispatch(handleAddAnswer(question.id, item))
    this.handleAnswerUpdate(item)
  }
  /**
   * obtains the vote for the current question
   */
  getAnswer = () => {
    const { question, authedUser } = this.props
    let selectedOption = ''
    if (question.optionOne.votes.includes(authedUser)) {
      selectedOption = 'optionOne'
    } else if (question.optionTwo.votes.includes(authedUser)) {
      selectedOption = 'optionTwo'
    }
    return selectedOption
  }

  getStatistics = () => {
    let statistics = {
      optionOne: '',
      optionTwo: ''
    }
    const { selectedOption } = this.state
    if (selectedOption !== '') {
      const { question } = this.props
      // count the answers for opt 1 and 2
      const optionOneVotes = question.optionOne.votes.length
      const optionTwoVotes = question.optionTwo.votes.length
      // count the whole number of answers
      const totalVotes = optionOneVotes + optionTwoVotes
      // take the average
      const optionOnePercentage = (optionOneVotes * 100) / totalVotes
      const optionTwoPercentage = (optionTwoVotes * 100) / totalVotes

      statistics.optionOne = selectedOption === 'optionOne'
        ? `${optionOnePercentage}% of users agree with you`
        : `${optionOnePercentage}% of users disagree with you`
      statistics.optionTwo = selectedOption === 'optionTwo'
        ? `${optionTwoPercentage}% of users agree with you`
        : `${optionTwoPercentage}% of users disagree with you`
    }
    console.log('the statistics are', statistics)
    return statistics
  }

  handleAnswerUpdate = (value) => {
    console.log('the answer is being updated by', value)
    this.setState(() => ({
      selectedOption: value
    }))
    this.getStatistics()
  }

  componentDidMount() {
    const selected = this.getAnswer()
    if (selected !== '') {
      console.log('the component did mount is being called')
      console.log(selected)
      this.handleAnswerUpdate(selected)
      this.getStatistics()
    }

  }

  render () {
    const { selectedOption } = this.state
    const { question, asker, votes } = this.props
    const optionSelected = selectedOption !== ''? true: false
    const markOptionOne = selectedOption === 'optionOne'? true: false
    const markOptionTwo = selectedOption === 'optionTwo'? true: false
    const firstBg = markOptionOne? 'from-blue-600 to-blue-500' : ''
    const secondBg = markOptionTwo? 'from-blue-600 to-blue-500' : ''
    let statistics = {}
    statistics.optionOne = selectedOption === 'optionOne'
      ? '% of users agree with you'
      : '% of users disagree with you'
    statistics.optionTwo = selectedOption === 'optionTwo'
      ? '% of users agree with you'
      : '% of users disagree with you'
    return (
      <div className="flex flex-col justify-center content-center my-20">
        <div className="w-3/5 mx-auto bg-gray-100 rounded-t py-4">
            <p className="font-medium text-left pl-5 text-base">Asked by {asker.name}</p>
        </div>
        <div className="shadow-2xl w-3/5 mx-auto bg-white rounded-b-lg">
          <div className="flex flex-row justify-center content-center">
            <div className="py-20 mx-auto my-auto">
              <Avatar avatarURL={asker.avatarURL} dimensions={'h-56 w-56'}/>
            </div>
            <div className="w-2/3 px-10 flex flex-col gap-4 justify-left my-auto">
              <p className="font-bold text-xl text-left">Would you rather</p>
              <Poll
                id={'optionOne'}
                bgColor={firstBg}
                dimensions={'h-32'}
                onClickFunction={this.register}
                cardText = {
                  <div className="flex flex-col gap-2 justify-start">
                    <div className="flex flex-row gap-4">
                      <p className="text-white font-normal">
                        {this.capitalize(question.optionOne.text)}
                      </p>
                      {markOptionOne &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                    </div>
                    {optionSelected &&
                      <p className="flex-1 text-white font-thin text-left">
                      {`${votes.optionOnePercentage}${statistics.optionOne} (${votes.optionOneVotes} out of ${votes.totalVotes})`}
                      </p>
                    }
                  </div>
                }
              />
              <Poll
                id={'optionTwo'}
                bgColor={secondBg}
                dimensions={'h-32'}
                onClickFunction={this.register}
                cardText = {
                  <div className="flex flex-col gap-2 justify-start">
                    <div className="flex flex-row gap-4">
                      <p className="text-white font-normal text-left">
                        {this.capitalize(question.optionTwo.text)}
                      </p>
                      {markOptionTwo &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                    </div>
                    {optionSelected &&
                      <p className="flex-1 text-white font-thin text-left">
                      {`${votes.optionTwoPercentage}${statistics.optionTwo} (${votes.optionTwoVotes} out of ${votes.totalVotes})` }
                      </p>
                    }
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps ({questions, users, authedUser}, props) {
  const id = props.match.params.id
  const question = questions[id]
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes
  const optionOnePercentage = Math.round(((optionOneVotes * 100) / totalVotes), -1)
  const optionTwoPercentage = Math.round(((optionTwoVotes * 100) / totalVotes), -1)
  return {
    authedUser,
    question: question,
    votes: { optionOnePercentage, optionTwoPercentage, optionOneVotes, optionTwoVotes, totalVotes},
    asker : users[question.author]
  }
}

export default withRouter(connect(mapStateToProps)(PollDetails))