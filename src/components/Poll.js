import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// pass the height as props
class Poll extends Component {
  render () {
    const { id, cardText, cardFooter, onClickFunction, dimensions, layout } = this.props
    return (
      <div className={`${layout} cursor-pointer`} onClick={() => onClickFunction(id)}>
        <div className={`${dimensions} flex flex-wrap content-center h-64 w-64 justify-center bg-gradient-to-b from-cerise-red-600 to-cerise-red-500 shadow-lg rounded-t-lg`}>
        {/* <div className="flex flex-wrap content-center h-64 bg-gradient-to-b from-cerise-red-600 to-cerise-red-500 shadow-lg rounded-t-lg"> */}
          <div>{cardText}</div>
        </div>
        <div>{cardFooter}</div>
      </div>
    )
  }
}

export default withRouter(Poll)