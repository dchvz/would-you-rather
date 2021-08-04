import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../App.css'
class PollForm extends Component {
  state = {
    optionOneText : '',
    optionTwoText : ''
  }

  submitPoll = (event) => {
    event.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props
    dispatch(handleAddQuestion({optionOneText, optionTwoText}))
      .then(() => {
        this.props.history.push('/')
      })
  }
  handleInputChange = (event) => {
    const value = event.target.value
    const key = event.target.name
    this.setState(() => ({
      [key]: value
    }))
  }
  render () {
    const {optionOneText, optionTwoText} = this.state
    return (
      <div className="w-2/5 flex justify-center py-10 my-20 shadow-2xl mx-auto bg-white rounded-b-lg">
        <form className="w-full max-w-sm justify-center" onSubmit={this.submitPoll}>
          <p className="font-bold text-2xl mb-10">Would you rather</p>
          <div className="md:flex md:items-center mb-6">
            <input
              className="placeholder-gray-500 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cerise-red-600"
              value = {optionOneText}
              placeholder = "Do this thing"
              type="text"
              name="optionOneText"
              onChange={this.handleInputChange}
            />
          </div>
          <div id="or">OR</div>
          <div className="md:flex md:items-center mb-6">
            <input
              className="placeholder-gray-500 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cerise-red-600"
              value = {optionTwoText}
              placeholder = "Do that thing instead"
              type="text"
              name="optionTwoText"
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="shadow bg-cerise-red-600 hover:bg-cerise-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={(e) => {this.submitPoll(e)}}
          >
            Submit
          </button>

        </form>
      </div>
    )
  }
}

export default withRouter(connect()(PollForm))