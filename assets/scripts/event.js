'use strict'

const getFormFields = require('./get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateJournal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createJournal(data)
    .then(ui.createJournalSuccess) // ui.handleSuccessfulCreate
    .catch(console.error)
}

const onViewJournal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.viewJournal(data)
    .then(console.log)
    .catch(console.error)
}

const onEditJournal = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editJournal(data)
    .then(console.log)
    .catch(console.error)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateJournal,
  onViewJournal,
  onEditJournal
}
