import { _getUsers,_getQuestions } from '../_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function getInitialData () {
  return (dispatch) => {
    Promise.all([_getUsers, _getQuestions])
      .then( ({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}