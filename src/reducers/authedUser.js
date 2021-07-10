import { SET_AUTHED_USER } from '../actions/authedUser'

export default function questions (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      console.log('calling here')
      return action.id
    default:
      return state
  }
}