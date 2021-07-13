import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom';
import Avatar from './Avatar'
import ComboBox from './ComboBox'

class Modal extends Component {
  state = {
    allusers: this.props.users,
    selectedUser: this.props.users['sarahedo']
  }

  /**
   * changes the current selected user state
   * @param {string} id
   */
  handleUserUpdate = (id) => {
    const currentUser = this.props.users[id]
    this.setState(() => ({
      selectedUser: currentUser,
    }));
  }

  /**
   * dispatches the action to authenticate the user in the rest of the app, redirects
   * @param {string} id
   */
  handleUserLogin = (id) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
    this.props.history.push('dashboard')
  }

  render () {
    const { users } = this.props
    const { selectedUser } = this.state
    const userIds = Object.keys(users)
    return (
      <div className="flex w-max mx-auto items-center h-auto">
        <div className="w-96 pb-4 bg-white shadow-lg rounded-lg my-20">
          <div className="flex flex-col items-center align-middle gap-4">
            <div className="w-full py-4 bg-gray-100 rounded-t-lg">
              <h2 className="text-gray-800 text-lg font-semibold">Pick your user to continue</h2>
              <p className="text-gray-700 text-sm font-light">Please sign in to continue</p>
            </div>
            <Avatar avatarURL={selectedUser.avatarURL} dimensions={'h-48 w-48'} />
            <ComboBox items={userIds} handleUserUpdate={this.handleUserUpdate} />
            <button
              className="w-64 bg-cerise-red-500 hover:bg-cerise-red-400 text-white font-bold py-2 px-4 rounded-full mb-4"
              onClick={() => this.handleUserLogin(selectedUser.id)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}, props) {
  return {
    users
  }
}

export default withRouter(connect(mapStateToProps)(Modal))