'use strict'

const authEvents = require('./event.js')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.mainContent').on('submit', authEvents.onCreateJournal)
  $('#saved-journals').on('submit', authEvents.onViewJournal)
  $('#viewJournal').on('submit', authEvents.onViewOneJournal)
})
