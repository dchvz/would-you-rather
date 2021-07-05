import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <nav>
        <ul className='flex flex-row gap-10'>
          <li className='ml-10'>Home</li>
          <li>New +</li>
          <li>Leaderboard</li>
        </ul>
      </nav>
    )
  }
}

export default Nav