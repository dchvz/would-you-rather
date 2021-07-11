import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Avatar from './Avatar'
import ComboBox from './ComboBox'

class Modal extends Component {
  state = {
    selectedUser: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: 'https://images.generated.photos/pmImbj_l9p4yqkMNU34BcZa8CwK8aBc9Upp3MZvMtrc/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5ODU5MDcuanBn.jpg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
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
   * dispatches the action to authenticate the user in the rest of the app
   * @param {string} id
   */
  handleUserLogin = (id) => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(id))
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
              onClick={this.handleUserLogin(selectedUser.id)}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Modal);