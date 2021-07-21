import { _getUsers, _getQuestions, _saveQuestionAnswer } from "./_DATA";

export function handleInitialData () {
  return Promise.all([
    _getUsers(),_getQuestions()
  ]).then(([users, questions]) => ({
    users, questions
  }))
}

export function saveQuestionAnswer (questionAnswer) {
  return _saveQuestionAnswer(questionAnswer)
}