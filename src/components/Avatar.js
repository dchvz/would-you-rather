import React from 'react'

export default function Avatar (props) {
const { avatarURL, dimensions } = props
  // const avatarURL = 'https://pbs.twimg.com/media/EUZXL2zUcAEONHS.jpg'
  return (
    <div className={`${dimensions} relative`}>
      <div className="group w-full h-full rounded-full overflow-hidden shadow-inner">
        <img src={avatarURL} alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
      </div>
    </div>
  )
}