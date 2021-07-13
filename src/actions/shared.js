import { handleInitialData} from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function getInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return handleInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}