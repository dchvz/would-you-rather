import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestionAnswer } from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE USERS'
export const ADD_ANSWER = 'ADD ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnswer (answer) {
  return {
    type: ADD_ANSWER,
    answer
  }
}

// this should send something to a reducer, its not doing anything
export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}