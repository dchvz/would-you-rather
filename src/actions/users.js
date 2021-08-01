import { showLoading, hideLoading } from 'react-redux-loading'
import { addVotes } from './questions'
import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE USERS'
export const ADD_ANSWER = 'ADD ANSWER'
export const ADD_QUESTION = 'ADD QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addQuestionAnswer (question) {
  return {
    type: ADD_ANSWER,
    question
  }
}

export function addUserQuestion (question) {
  console.log('the question is', question)
  return {
    type: ADD_QUESTION,
    question
  }
}

// REVISAR CUANDO HACER LA TECNICA OPTIMISTIC
// REVISAR SI ESTAN ORDENADOS POR FECHA EN EL DASHBOARD
export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    const question = {
      authedUser,
      qid,
      answer
    }
    dispatch(addVotes(question))
    return saveQuestionAnswer({ authedUser, qid, answer})
      .then(() => {
        dispatch(addQuestionAnswer(question))
      })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}