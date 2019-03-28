// Import contact function from contacts.js
//const contact = require('./contact.js');
//import {contact} from './contact.js';
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

    //This is the new contact constructor function.
     function contact (firstName, secondName, phoneNumber, email, street, city, country){
      this.firstName = firstName;
      this.secondName = secondName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.address = {}; //Makes a new object from this.address
      this.address.street = street; //pushes street to this.address
      this.address.city = city; //pushes city to this.address
      this.address.country = country; //pushes country to this.address
      this.ID = Math.floor((Math.random() * 100000000) + 200000000);
      //A random ID number between 100000000 and 200000000 is assigned to new contacts.
      this.fullAddress = function(){
        console.log (this.address.street + ", " + this.address.city + ", " + this.address.country);
      }; //When the this.fullAddress() function is called, it prints  the street, city and country of the contact.
      addressBook.push([this.ID,this.firstName,[this]]);
      //pushes the new contact contained within its own mini array to the address book in the format [this.ID,this.firstName,[this]]
      
    }

    //Function to add contacts to the homepage
    $("#address-list").append(addressBook[2]);

    /*Searches through the addressBook for a contact with a matching ID
    -The mini array containing the contact details in the address book is in the format
      [this.ID,this.firstName,[this]]
    -So the searchByID() function will reference the addressBook[j][0] which is the index of the ID idNumber
      and if a matching ID is found, it will print the addressBook[j][2] which is the index of the contact details.
    */
    var searchByFirstName = (f_name) => {
      contactExists = false;
      for(j=0; j<addressBook.length ; j++){
        if(addressBook[j][1] === f_name){
          //console.log("Contact found - ",addressBook[j][1]);
          //console.log(addressBook[j][2]);
          //contactExists = true;
        };
      }
      //if(contactExists === false){
          //console.log("There is no contact with that ID.")
      //};
    };

    // Function call for contact
    var person = new contact (firstName, lastName, phone, email, street, city, country);
    alert(addressBook);

  });
});
