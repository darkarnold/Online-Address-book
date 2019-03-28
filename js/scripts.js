// Import contact function from contacts.js
const contact = require('./contact.js');
//import contact from './contact.js';
//const shuffle = require('./shuffler.js');
$(document).ready(function(){

  $("#submit").click(function(event) {
    // Address Book Array to store the contacts created
    var addressBook =[]
    // Variables to get information from the form fields
    var firstName = document.getElementById('fname').value
    var lastName = document.getElementById('lname').value
    var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value
    var street = document.getElementById('street').value
    var city = document.getElementById('city').value
    var country = document.getElementById('country').value
    // Function call for contact
    var person = new contact (firstName, lastName, phone, email, street, city, country);
    alert(addressBook);

  });
});
