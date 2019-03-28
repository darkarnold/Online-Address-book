/*
This file contains several functions that fullfill the requirements of the Js Objects - Assignment.
1. There is an contact constructor function called Contact. It creates new contacts and pushes them to
  an address book array. Each of the created contacts receives a random numeric ID by which they are easily accessed.
2. There is a function, functionList () which simply prints a list of all the available functions.
3. There is a function, searchByID(idNumber) that searches through the address book for a contact with a matching ID
   to the one you input.
4. There is a function, deleteByID(idNumber) that removes the contact with an ID matching the input id from the
   address book and deposits them in the contactsBin array.
5. There is a function, recoverByID(idNumber) that restores a deleted contact with a matching ID from the
   contactsBin array to the addressBook array.
6. There is a function permDel(idNumber) that permanently deletes a contact with a matching ID regardless of
   if it is in the addressBook or contactsBin.
7. There is a function, contactEdit(contactName, contactField, newInput, a, b, c)  that edits the content of
   any new contact object and replaces them with what it receives as input.
*/

//var addressBook =[]
var contactsBin = []

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
export contact;

/*Searches through the addressBook for a contact with a matching ID
-The mini array containing the contact details in the address book is in the format
  [this.ID,this.firstName,[this]]
-So the searchByID() function will reference the addressBook[j][0] which is the index of the ID idNumber
  and if a matching ID is found, it will print the addressBook[j][2] which is the index of the contact details.
*/
var searchByID = (idNumber) => {
  contactExists = false;
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact found - ",addressBook[j][1]);
      console.log(addressBook[j][2]);
      contactExists = true;
    };
  }
  if(contactExists === false){
      console.log("There is no contact with that ID.")
  };
};



/*Searches through the addressBook for a contact with a matching ID
-The mini array containing the contact details in the address book is in the format
  [this.ID,this.firstName,[this]]
-So the deleteByID() function will reference the addressBook[j][0] which is the index of the ID idNumber
  and if a matching ID is found, it will push the entire mini array containing the contact to the contactsBin
  while splicing it out of the addressBook.
  */
var deleteByID = (idNumber) => {
  var contactExists = false
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact: " + addressBook[j][1] + " with ID number " + addressBook[j][0] +
       " has been deleted. It can be recovered from the contactsBin" )
      contactsBin.push(addressBook[j])
      addressBook.splice(j,1);
      contactExists = true;
    };
  };
  if(contactExists === false){console.log("There is no contact with that ID.")
  };
};



/*Searches through the contactsBin for a contact with a matching ID
-The mini array containing the contact details in the contactsBin is in the format
  [this.ID,this.firstName,[this]]
-So the recoverByID() function will reference the contactsBin[j][0] which is the index of the ID idNumber
  and if a matching ID is found, it will push the entire mini array containing the contact to the addressBook
  while splicing it out of the contactsBin.
  */
var recoverByID = (idNumber) => {
  contactExists = false;
  for(j=0; j<contactsBin.length ; j++){
    if(contactsBin[j][0] === idNumber){
      console.log("Contact recovered - ",contactsBin[j][1]);
      console.log(contactsBin[j][2]);
      contactExists = true;
      addressBook.push(contactsBin[j])
      contactsBin.splice(j,1);
    };
  }
  if(contactExists === false){
      console.log("There is no contact with that ID.")
  };
};



/*Searches through the addressBook for a contact with a matching ID
-The mini array containing the contact details in the address book is in the format
  [this.ID,this.firstName,[this]]
-So the permDel() function will reference the addressBook[j][0] which is the index of the ID idNumber
  and if a matching ID is found, it splice the entire mini array containing the contact out of either the contactsBin
  or the addressBook, depending on where it finds it.
  */
var permDel = (idNumber) => {
  var contactExists = false
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === idNumber){
      console.log("Contact: " + addressBook[j][1] + " with ID number " + addressBook[j][0] +
       " has been permanently deleted. It cannot be recovered." )
      addressBook.splice(j,1);
      contactExists = true;
    };
  };
  for(j=0; j<contactsBin.length ; j++){
    if(contactsBin[j][0] === idNumber){
      console.log("Contact " + contactsBin[j][1] + " with ID number " + contactsBin[j][0] +
       " has been permanently deleted. It cannot be recovered." )
      contactsBin.splice(j,1);
      contactExists = true;
    };
  };
  if(contactExists === false){console.log("There is no contact with that ID.")
  };
};


/*
Ive edited the contact Edit function to work with ID numbers. The object name can now remain irrelevant and
is not required to make any of the functions work.
  -contactID parameter takes in the ID number of the contact to be targeted. This is a must to fill in,
  -contactField parameter takes in the name of the property being targeted. This is also a must to fill,
  -newInput parameter takes in the new input you intend for the targeted property, BUT it should be replaced with null
   as a placeholder if the property being targeted is the contact address.
  - a, b, and c are only relevant if you're targeting the contact address, otherwise, they can be skipped all together.
   a - fill in the new street value
   b - fill in the new city value
   c - fill in the new country value
*/
function contactEdit(contactID, contactField, newInput, a, b, c){

  contactExists = false;
  for(j=0; j<addressBook.length ; j++){
    if(addressBook[j][0] === contactID){
      if(contactField === "firstName"){addressBook[j][2][0].firstName = newInput;
        addressBook[j][1] = newInput;
      };
      if(contactField === "secondName"){addressBook[j][2][0].secondName = newInput};
      if(contactField === "phoneNumber"){addressBook[j][2][0].phoneNumber = newInput};
      if(contactField === "ID"){addressBook[j][2][0].ID = newInput};
      if(contactField === "address"){
        function addressEdit (q, d, d){
          addressBook[j][2][0].address = {}
          addressBook[j][2][0].address.street = a;
          addressBook[j][2][0].address.city = b;
          addressBook[j][2][0].address.country = c;
          return addressBook[j][2][0].address;
        };
        addressEdit(a,b,c)
      };
    contactExists = true;
    };
  }
  if(contactExists === false){
      console.log("There is no contact with that ID.")
  };
}


/*
This function when called as functionList() just prints a list of all the functions available.
It's not necessary but is meant to help with navigation.
*/
function functionList (){console.log("List of all available functions;" +
"\n 1. This function - functionList()" +
"\n 2. contact (firstName, secondName, phoneNumber, email, street, city, country) " +
"\n 3. contactEdit(contactID, contactField, newInput, a, b, c); " + "\n 4. permDel(idNumber)"
+ "\n 5. recoverByID(idNumber)" + "\n 6. deleteByID(idNumber)" + "\n 7. searchByID(idNumber)" +
"\n ALSO" + "\n - You can console.log(addressBook)"  + "\n - You can console.log(contactsBin)"
)};


/*
This is some data that can be used to test all the functions.
*/

var Moses = new contact ("Moses", "Kodero", "07792929292", "musa@gmail.com", "Panya0", "Kampala", "Uganda");

var Bill = new contact ("Bill", "Billo", "07792929292", "musa@gmail.com", "Panya1", "Kampala", "Uganda");

var Bugs = new contact ("Bugs", "Bugsy", "07792929292", "musa@gmail.com", "Panya2", "Kampala", "Uganda");

var Bob = new contact ("Bob", "Bobbert", "07792929292", "musa@gmail.com", "Panya3", "Kampala", "Uganda");


console.log(Moses);
console.log(Bill);
console.log(Bugs);
console.log(Bob);
console.log(addressBook);


functionList ();

contactEdit(contactID, contactField, newInput, a, b, c)

// Export the function contact
//export function contact(){...};
//module.exports = contact;
