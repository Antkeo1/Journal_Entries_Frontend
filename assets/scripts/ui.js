'use strict'

const store = require('./store.js')
$('.journalEntry').hide()
$('.savedJournals').hide()
$('.border3').hide()

const signUpSuccess = data => {
  store.user = data.user
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.greeting').hide()
  $('.border, .border2').hide()
  $('.border3, .border4').show()
  $('h2').text('Sign In Success').show()
  $('.journalEntry').show()
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  alert('Sign Up unsuccessful')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.greeting').hide()
  $('.savedJournals').show()
  $('.border, .border2').hide()
  $('.border3, .border4').show()
  $('h2').text('Sign In Success').show()
  $('.journalEntry').show()
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  alert('Sign In unsuccessful')
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
  alert('Password Change successful')
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
  alert('Password Change unsuccessful')
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.greeting').show()
  $('.border, .border2').show()
  $('.border3, .border4').hide()
  $('.journalEntry').hide()
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  alert('Sign Out unsuccessful')
}

const createJournalSuccess = data => {
  store.user = data.user
  $('#message').text('Saved Journal successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(data)
  console.log('saveJournalSuccess ran. Data is :', data)
}

const viewJournalSuccess = data => {
  store.user = data.user
  $('#message').text('Saved Journal successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(data)
  console.log('saveJournalSuccess ran. Data is :', data)
}

const editJournalSuccess = data => {
  store.user = data.user
  $('#message').text('Edit Journal successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('editJournalSuccess ran. Data is :', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createJournalSuccess,
  editJournalSuccess,
  viewJournalSuccess
}
