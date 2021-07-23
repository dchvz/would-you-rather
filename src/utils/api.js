import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from "./_DATA";

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

export function saveQuestion (question) {
  return _saveQuestion(question)
}