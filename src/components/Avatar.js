import React from 'react'

export default function Avatar () {
  const { avatarURL } = this.props
  return (
    <img src={avatarURL} alt='user pic'></img>
  )
}