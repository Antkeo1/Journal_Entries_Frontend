'use strict'

const getFormFields = require('./get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
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

const onSaveJournal = function (event) {
  event.preventDefault()
  // think of putting in whatever logic
  // gets your move data here instead
  const cellData = getFormFields(event.target)
  const data = {
    journals: {
      cell: {
        index: cellData.cell.index,
        value: cellData.cell.value
      }
    },
    over: false
  }
  console.log(data)
  api.patchMove(data)
    .then((responseData) => {
      console.log(responseData.journals.cells)
    })
    .catch(console.err)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGameClick,
  onSaveJournal
}
