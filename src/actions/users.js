import { addVotes, deleteVotes } from './questions'
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
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddAnswer (qid, answer) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
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
      .catch(() => {
        console.log('There was an error adding the answer. Try again')
        dispatch(deleteVotes(question))
      })
  }
}