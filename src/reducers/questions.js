import { RECEIVE_QUESTIONS, SAVE_QUESTIONS, ADD_VOTES } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_VOTES:
      return {
        ...state,
        [action.question.qid]: {
          ...state[action.question.qid],
          [action.question.answer]: {
            ...state[action.question.qid][action.question.answer],
            votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
          }
        }
      }
    default:
      return state
  }
}