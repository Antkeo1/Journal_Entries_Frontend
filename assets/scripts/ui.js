'use strict'

const store = require('./store.js')
$('.journalEntry').hide()
$('.savedJournals').hide()
$('.border3').hide()
$('.greeting2').hide()
$('.border4').hide()

const signUpSuccess = data => {
  store.user = data.user
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('.greeting').hide()
  $('.border, .border4 .border3 .border2').hide()
  $('h2').text('Sign Up Success').show()
  $('.greeting2').show()
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
  $('#sign-in').trigger('reset')
  $('.greeting, .greeting2').hide()
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
  $('#change-password').trigger('reset')
  $('#saved-journals').show()
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
  $('#saved-journals').hide()
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
  $('.mainContent').trigger('reset')
  console.log(data)
  console.log('saveJournalSuccess ran. Data is :', data)
}

const viewJournalSuccess = data => {
  store.user = data.user
  $('#message').text('Saved Journal successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // to display my saved entries
  data.journals.forEach(journal => {
    const journalsHtml = (`
      <h5>${journal.title}</h5>
      <h5>${journal.subject}</h5>
      <p>${journal.text}</p>
      <button>Edit</button>
      <button>Delete</button>
      `)
    $('#savedJournalsContent').append(journalsHtml)
  })

  console.log(data)
  console.log('saveJournalSuccess ran. Data is :', data)
}

const onViewOneJournalSuccess = data => {
  store.user = data.user
  const journalHTML = (`
    <h4>Title: ${data.journal.title}</h4>
    <p>Subject: ${data.journal.subject}</p>
    <br>
  `)

  $('#savedJournalsContent').html(journalHTML)

  // reset form
  // $('#books-show').trigger('reset')
}

const editJournalSuccess = data => {
  store.user = data.user
  $('#message').text('Edit Journal successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#savedJournalsContent').html('You successfully updated the book')
  // reset form
  $('#editJournal').trigger('reset')
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
  viewJournalSuccess,
  onViewOneJournalSuccess
}
