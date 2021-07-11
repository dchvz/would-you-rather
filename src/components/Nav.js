import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'
import { BiLogOut } from "react-icons/bi";
import { setAuthedUser } from '../actions/authedUser';

const links = [
  {route: '/', name: 'Home'},
  {route: '/new', name: 'New +'},
  {route: '/leaderboard', name: 'Leaderboard'}
]
// TODO hacer una funcion que redirige al main, ponga como null el authed user
// TODO hacer que cuando el authed user sea nulo, solo se despliegue la seleccion de usuario
class Nav extends Component {
  handleLogOut = () => {
    console.log('the log out is being handled')
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }
  render () {
    const {currentUser} = this.props
    return (
      <nav className="py-4">
        <ul className="flex flex-row">
          {links.map(link => (
            <li className="ml-10">
              <NavLink to={link.route} exact className="cursor-pointer">
                {link.name}
              </NavLink>
            </li>
          ))}
          {
            currentUser
            ?
            <div className="flex flex-row space-x-4 absolute right-10">
              <Avatar avatarURL={currentUser.avatarURL} dimensions={'h-8 w-8'} />
              <NavLink to="/" exact className="cursor-pointer" onClick={this.handleLogOut}>
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