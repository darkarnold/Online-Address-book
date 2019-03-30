
$(document).ready(function(){



  // hides the contact-List
  $("#info").hide();
  // Address Book Array to store the contacts created
  var addressBook =[];
  var clickFunctions = [];
  var count = 0;


  /*Searches through the addressBook for a contact with a matching ID
  -The mini array containing the contact details in the address book is in the format
    [this.ID,this.firstName,[this]]
  -So the searchByID() function will reference the addressBook[j][0] which is the index of the ID idNumber
    and if a matching ID is found, it will print the addressBook[j][2] which is the index of the contact details.
  */
  /*var searchByFirstName = (f_name) => {
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
  };*/
  $("#submit").click(function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // shows the contact List
    //$("#info").show("slow");



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

       /*this.fullAddress = function(){
        console.log (this.address.street + ", " + this.address.city + ", " + this.address.country);
      };*/ //When the this.fullAddress() function is called, it prints  the street, city and country of the contact.
      addressBook.push([this.ID,this.firstName,[this]]);
      //pushes the new contact contained within its own mini array to the address book in the format [this.ID,this.firstName,[this]]


    }

    //Function to add contacts to the homepage



    // Function call for contact
    var person = new contact (firstName, lastName, phone, email, street, city, country);

    //$("#info").append(addressBook[count][2][0].secondName);
  alert(addressBook);
  alert(addressBook[count][2][0]);
  $('#contactForm').trigger('reset');



 $("#info").append(`
  <div>
    <a href="#" class="collapsible" id = "`+ person.firstName + person.ID +`">`+ person.firstName +`</a>
    <div class="content" id = "`+ person.secondName + person.ID +`">
    First Name:`+ person.firstName + `<br> Second Name:`+ person.secondName +`<br>Phone number:`+ person.phoneNumber
    +`<br>Email Address:`+ person.email +`<br>Street:`+ person.address.street +`<br>City:`+ person.address.city +`<br>Country:`+ person.address.country +`
    </div>`)

    $(`#`+ person.secondName + person.ID +``).hide();



    var coll = document.getElementsByClassName("collapsible");
    var content = document.getElementById(``+ addressBook[count][2][0].secondName + addressBook[count][2][0].ID +``);
    //content.style.display === "none"

    $(`#`+ addressBook[count][2][0].firstName + addressBook[count][2][0].ID +``).click(function() {
      //this.classList.toggle("active");
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

  count++;
  alert("Contact added successfuly. " + count + " contacts currently in address book.")
  });

  $("#show-contact").click(function(event) {
    $("#info").show("slow");
    $("#contactForm").hide("slow");

  });

  $("#back-form").click(function(event) {
    $("#info").hide("slow");
    $("#contactForm").show("slow");

  });

  //$("#show-contact").click(function(){

    //alert(addressBook);
    //alert(count);
  //});


});
