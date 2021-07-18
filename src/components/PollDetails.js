import React, {Component} from 'react'
import { withRouter } from "react-router"
import { connect } from 'react-redux'
import Avatar from './Avatar'
import Poll from './Poll'

// TODO create an action creator and pass it as props
// TODO call an action creator to register the answer
// TODO show the results of the poll
class PollDetails extends Component {
  capitalize = word => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  register = () => {

  }

  render () {
    const { question, asker } = this.props
    return (
      <div className="flex flex-col justify-center content-center my-20">
        <div className="w-3/5 mx-auto bg-gray-100 rounded-t py-4">
            <p className="font-bold text-left pl-5 text-base">Asked by {asker.name}</p>
        </div>
        <div className="shadow-2xl w-3/5 mx-auto bg-white rounded-b-lg">
          <div className="flex flex-row justify-center content-center">
            <div className="py-20 mx-auto my-auto">
              <Avatar avatarURL={asker.avatarURL} dimensions={'h-56 w-56'}/>
            </div>
            <div className="w-2/3 px-10 flex flex-col gap-4 justify-left my-auto">
              <p className="font-bold text-xl text-left">Would you rather</p>
              <Poll dimensions={'h-32'}
                cardText = {
                  <p className="text-white font-normal">
                    {this.capitalize(question.optionOne.text)}
                  </p>
                }
              />
              <Poll dimensions={'h-32'}
                cardText = {
                  <p className="text-white font-normal">
                    {this.capitalize(question.optionTwo.text)}
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps ({questions, users}, props) {
  const id = props.match.params.id
  const question = questions[id]
  return {
    question: question,
    asker : users[question.author]
  }
}

export default withRouter(connect(mapStateToProps)(PollDetails))