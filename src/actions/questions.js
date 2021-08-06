import { saveQuestion } from '../utils/api'
import { addUserQuestion } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS'
export const ADD_VOTES = 'ADD_VOTES'
export const DELETE_VOTES = 'DELETE_VOTES'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion (question) {
  return {
    type: SAVE_QUESTIONS,
    question
  }
}

export function addVotes (question) {
  return {
    type: ADD_VOTES,
    question
  }
}

export function deleteVotes (question) {
  return {
    type: DELETE_VOTES,
    question
  }
}

export function handleAddQuestion ({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
      })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}