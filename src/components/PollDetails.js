import React, {Component} from 'react'

class PollDetails extends Component {
  render () {
    return (
      <div>
        <p className="font-bold text-2xl">Would you rather?</p>
        {/* Add two polls and pass each other its content
          send the question id for it to render the content
          use slots to modify the body of the poll
          add css property to change the color of the poll
          add onClick method to set whatever the user chooses
        */}
      </div>
    )
  }
}

export default PollDetails