import React from 'react'
import Avatar from './Avatar'

export default function UserRecord (props) {
  const { index, rankedUser } = props
  return (
    <div className='w-3/5 px-10 h-20 bg-gradient-to-b red-300 shadow-lg rounded justify-center grid grid-cols-5 content-center mx-auto items-center text-left'>
      <p className="font-medium text-xl">#{index + 1}</p>
      <Avatar dimensions={'h-8 w-8'} avatarURL={rankedUser.picture} />
      <div className="flex-col">
        <p>Name</p>
        <p className="font-extralight">{rankedUser.name}</p>
      </div>
      <div className="flex-col">
        <p>Answered</p>
        <p className="font-extralight">{rankedUser.answered}</p>
      </div>
      <div className="flex-col">
        <p>Asked</p>
        <p className="font-extralight">{rankedUser.asked}</p>
      </div>
    </div>
  )
}