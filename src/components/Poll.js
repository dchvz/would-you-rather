import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// pass the height as props
class Poll extends Component {
  render () {
    const { id, cardText, cardFooter, onClickFunction, dimensions, layout, bgColor } = this.props
    const currentBg = bgColor || 'from-cerise-red-600 to-cerise-red-500'
    return (
      <div className={`${layout} cursor-pointer`} onClick={() => onClickFunction(id)}>
        <div className={`${dimensions} flex flex-wrap content-center bg-gradient-to-b ${currentBg} px-10 shadow-lg rounded`}>
          <div>{cardText}</div>
        </div>
        <div>{cardFooter}</div>
      </div>
    )
  }
}

export default withRouter(Poll)