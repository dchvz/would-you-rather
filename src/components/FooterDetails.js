import React from 'react'
import Avatar from './Avatar'

export default function FooterDetails (props) {
  const { asker } = props
  return (
    <div className="h-20 flex flex-wrap shadow-lg px-4 content-center gap-5 bg-white rounded-b-lg content-center">
      <Avatar avatarURL={asker.avatarURL} dimensions={'h-12 w-12'}/>
      <div>
        <p className="text-gray-700 text-sm font-extralight my-auto text-left">Asked by</p>
        <p className="text-gray-700 text-base font-light my-auto text-left">{asker.name}</p>
      </div>
    </div>
  )
}