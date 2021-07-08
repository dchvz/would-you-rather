import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

// TODO loop thru the available users in the select component
// TODO add state to get the selected user and change the avatar
// TODO add method to update the current state and redirect him to login
  // this will need to dispatch an action that receives the selected user and sends it to redux
class Modal extends Component {
  render () {
    return (
      <div className="flex w-max mx-auto items-center h-auto">
        <div className="w-96 pb-4 bg-white shadow-lg rounded-lg my-20">
          <div className="flex flex-col items-center align-middle">
            <div className="w-full py-4 bg-gray-200 rounded-t-lg mb-8">
              <h2 className="text-gray-800 text-lg font-semibold">Pick your user to continue</h2>
              <p className="text-gray-700 text-sm font-light">Please sign in to continue</p>
            </div>
            <Avatar />
            <div className="relative inline-flex">
              <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero"/></svg>
              <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Choose a user</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Black</option>
                <option>Orange</option>
                <option>Purple</option>
                <option>Gray</option>
                <option>White</option>
              </select>
            </div>
          </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Modal)