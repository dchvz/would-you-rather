import React, { Component } from 'react'
import Avatar from './Avatar'

class Card extends Component {
  render () {
    const avatarUrl = 'https://pbs.twimg.com/media/EUZXL2zUcAEONHS.jpg'
    return (
      <div className="w-1/4 bg-gradient-to-b from-cerise-red-600 to-cerise-red-500 shadow-lg rounded-lg cursor-pointer">
        <p className="text-white font-normal px-4 py-20">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris vehicula a tortor ut placerat. Maecenas nec magna metus. Proin pulvinar justo a consequat facilisis."
        </p>
        <div className="h-20 flex flex-wrap px-4 content-center gap-5 bg-white rounded-b-lg content-center">
          <Avatar avatarURL={avatarUrl} dimensions={'h-12 w-12'}/>
          <div>
            <p className="text-gray-700 text-sm font-extralight my-auto text-left">Asked by</p>
            <p className="text-gray-700 text-base font-light my-auto text-left">Mark Grayson</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card