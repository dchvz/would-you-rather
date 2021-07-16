import React from 'react'

export default function Avatar (props) {
const { avatarURL, dimensions } = props
  return (
    <div className={`${dimensions}`}>
      <div className="group w-full h-full rounded-full overflow-hidden shadow-inner">
        <img src={avatarURL} alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
      </div>
    </div>
  )
}