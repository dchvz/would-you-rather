import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class EmptyState extends Component {
  render() {
    const { redirect, textBody } = this.props
    return (
      <div>
        <img src='/emptyState.png' alt="empty state" className="h-72" />
        <p className="font-medium text-lg mt-5">{textBody[0]}</p>
        <div className="font-extralight text-center whitespace-pre">
          {textBody[1]}
        </div>
        <p className="font-extralight text-center">
        {textBody[2]}
        </p>
        <button
          className="mt-5 shadow bg-cerise-red-600 hover:bg-cerise-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => redirect()}
        >
          {textBody[3]}
        </button>
      </div>
    )
  }
}

export default withRouter(EmptyState)