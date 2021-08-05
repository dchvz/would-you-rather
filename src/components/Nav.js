import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { BiLogOut } from "react-icons/bi";
import { setAuthedUser } from '../actions/authedUser';

const links = [
  {route: '/', name: 'Home'},
  {route: '/new', name: 'New +'},
  {route: '/leaderboard', name: 'Leaderboard'},
]

class Nav extends Component {
  handleLogOut = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }
  render () {
    const {currentUser} = this.props
    return (
      <nav className="py-4">
        <ul className="flex flex-row">
          {links.map(link => (
            <li className="ml-10" key={link.route}>
              <NavLink to={link.route} exact className="cursor-pointer">
                {link.name}
              </NavLink>
            </li>
          ))}
          {
            currentUser
            ?
            <div className="flex flex-wrap space-x-4 absolute right-10">
              <p className="my-auto">{currentUser.name}</p>
              <Avatar avatarURL={currentUser.avatarURL} dimensions={'h-8 w-8'} />
              <NavLink to="/" exact className="flex flex-wrap content-center cursor-pointer" onClick={this.handleLogOut}>
                <BiLogOut className="h-6 w-6 cursor-pointer my-auto"/>
              </NavLink>
            </div>
            : null
          }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  const currentUser = users[authedUser]
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)