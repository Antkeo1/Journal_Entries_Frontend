'use strict'

const authEvents = require('./event.js')

$(() => {
  // your JS code goes here
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#signOut').on('submit', authEvents.onSignOut)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('.saveButton').on('submit', authEvents.onSaveJournal)
})
