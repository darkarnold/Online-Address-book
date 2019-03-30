
$(document).ready(function(){



  // hides the contact-List
  $("#info").hide();
  // Address Book Array to store the contacts created
  var addressBook =[];
  var count = 0; //Counts the number of contacts currently in the addressBook

  $("#submit").click(function(event) {
    // Prevent the page from reloading
    event.preventDefault();


    // Variables to get information from the form fields
    var firstName = document.getElementById('fname').value
    var lastName = document.getElementById('lname').value
    var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value
    var street = document.getElementById('street').value
    var city = document.getElementById('city').value
    var country = document.getElementById('country').value

    //This is the new contact constructor function.
     function contact (firstNames, secondName, phoneNumber, emails, streets, citys, countrys){
      this.firstName = firstNames;
      this.secondName = secondName;
      this.phoneNumber = phoneNumber;
      this.email = emails;
      this.address = {}; //Makes a new object from this.address
      this.address.street = streets; //pushes street to this.address
      this.address.city = citys; //pushes city to this.address
      this.address.country = countrys; //pushes country to this.address
      this.ID = count; // counts the number of addresses added

      addressBook.push([this.ID,this.firstName,[this]]);
      //pushes the new contact contained within its own mini array to the address book in the format [this.ID,this.firstName,[this]]


    }


  // Function call for contact, creating a new object in the addressBook array using details from the form
  var person = new contact (firstName, lastName, phone, email, street, city, country);

  //Resets the form every time a new contact is entered.
  $('#contactForm').trigger('reset');


  /*
  Appends a div containing the first name of the new contact to the info div (which is invisible by default) and adds
  the contact details as a separate div right under the firstName div
  */
  $("#info").append(`
  <div>
    <a href="#" class="collapsible" id = "`+ person.firstName + person.ID +`">`+ person.firstName +`</a>
    <div class="content" id = "`+ person.secondName + person.ID +`">
    First Name: `+ person.firstName + `<br> Second Name: `+ person.secondName +`<br>Phone number: `+ person.phoneNumber
    +`<br>Email address: `+ person.email +`<br>Street: `+ person.address.street +`<br>City: `+ person.address.city +`<br>Country: `+ person.address.country +`
    </div>`)

    //Hides the div containing contact details so that only the contact firstName is visible.
    $(`#`+ person.secondName + person.ID +``).hide();


    //Assigns variables to make accessing the contact name and contact details easier
    var coll = document.getElementsByClassName("collapsible");
    var content = document.getElementById(``+ addressBook[count][2][0].secondName + addressBook[count][2][0].ID +``);

    //Assigns a collapsible effect to the contact details div such that when the contact first name is clicked, it toggles the visibility of the details div
    $(`#`+ addressBook[count][2][0].firstName + addressBook[count][2][0].ID +``).click(function() {
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

 //Increments count to keep track of the number of contacts.
  count++;
  alert("Contact added successfuly. " + count + " contacts currently in address book.")
  });

  //Adds functionality to the show-contact button such that it shows the contact list and hides the form
  $("#show-contact").click(function(event) {
    $("#info").show("slow");
    $("#contactForm").hide("slow");

  });

  //Adds functionality to the back-form button such that it shows the form and hides the contact list
  $("#back-form").click(function(event) {
    $("#info").hide("slow");
    $("#contactForm").show("slow");

  });


});
