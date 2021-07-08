import { handleInitialData} from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function getInitialData () {
  return (dispatch) => {
      return handleInitialData()
        .then(({ users, questions }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
        })
  }
}