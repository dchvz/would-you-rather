import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Poll extends Component {
  render () {
    const { id, cardText, cardFooter, onClickFunction, dimensions, layout, bgColor, roundness } = this.props
    const currentBg = bgColor || 'from-cerise-red-600 to-cerise-red-500'
    const roundedStyle = roundness || 'rounded'
    return (
      <div className={`${layout} cursor-pointer shadow-md hover:shadow-xl rounded`} onClick={() => onClickFunction(id)}>
        <div className={`${dimensions} flex flex-wrap content-center bg-gradient-to-b ${currentBg} px-10 ${roundedStyle}`}>
          <div>{cardText}</div>
        </div>
        <div>{cardFooter}</div>
      </div>
    )
  }
}

export default withRouter(Poll)