import { handleInitialData} from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'
const AUTHED_ID = 'tylermcginnis'

export function getInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return handleInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}