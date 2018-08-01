/********************************
 *
 * DO YOUR ASSIGNMENT IN THIS FILE
 *
 *********************************/

// TEST EARLY AND OFTEN - node starter.js in the terminal
// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all four steps specified below - each step needs a console.log statement.
// EXAMPLE - Try running node starter.js before working on any of the parts and see what happens in the terminal.
const givenVariable = 20;
const doubledVariable = givenVariable * 2;
const tripledVariable = givenVariable * 3;
console.log(doubledVariable);
console.log('EXAMPLE', 'tripledVariable', tripledVariable);
// After running this and feeling comfortable, feel free to comment the above block of code out (either give each line a // or highlight the block of code and press COMMAND - / )

// DATATYPES

/********************************
 *
 * STEP A: Strings
 *
 *********************************/

// Set a constant equal to the name of our WDI instance (capitalized) with the name 'bestClass'.  Log this value.
const bestClass = 'Peloton';
// Set a bestClassLowercase variable converting bestClass to a lowercase string. Log this value.
const bestClassLowercase = bestClass.toLowerCase();
console.log(bestClassLowercase)
/********************************
 *
 * STEP B: Total
 *
 *********************************/

const amount1 = 1;
const amount2 = 3;

// Write an expression here which computes
// the correct value of a constant "total" based on the values of a and b
const total = amount1 + amount2;
// Log your answer (the value of total) to the console
console.log(total);
/********************************
 *
 * STEP C: Basic Conversion
 *
 *********************************/

const pounds = 155;

// Write an expression here which computes
// the correct value of a variable "kilograms"
const kilograms = pounds * 2.20462262185;
// Log kilograms to the console
console.log(kilograms);
/********************************
 *
 * STEP D: Grand Hotel Tremezzo
 *
 *********************************/

// Create a variable grandHotelTremezzoGuests  that is equal to an array containing three strings:
// 'George Clooney' 'Silvio Berlusconi'  and 'Isabella Rossellini'. Log grandHotelTremezzoGuests.
const grandHotelTremezzoGuests = ['George Clooney', 'Silvio Berlusconi', 'Isabella Rossellini'];
console.log(grandHotelTremezzoGuests);
// A new guest is checking in! Add "Fabio" to the end of the array. Log grandHotelTremezzoGuests.
grandHotelTremezzoGuests.push('Fabio');
// False alarm! Fabio was on a roller coaster and got hit in the face with a pigeon 
// so he won't be able to stay at the hotel remove him from the end of the array.  
// (We didn't use this method in class you will have to research.)  Log grandHotelTremezzoGuests.
grandHotelTremezzoGuests.pop();
console.log(grandHotelTremezzoGuests);

// A new guest is checking in for real! Add 'Mario Batali' to the end of our array. 
// He is wearing a disguise...but orange crocs. Log grandHotelTremezzoGuests.
grandHotelTremezzoGuests.push('Mario Batali');
console.log(grandHotelTremezzoGuests);

// Another new guest is checking in for real! Add 'Mario Balotelli' to the end of our array. 
// Log grandHotelTremezzoGuests.
grandHotelTremezzoGuests.push('Mario Balotelli');
console.log(grandHotelTremezzoGuests);


// Create a variable that is equal to the number of guests staying in our hotel by 
// checking the items count of grandHotelTremezzoGuests array.  Log this.
let numberOfGuests = grandHotelTremezzoGuests.length;
console.log(numberOfGuests);
// Create a variable 'grandHotelTremezzoPastGuests' set to an empty Array.
const grandHotelTremezzoPastGuests = [];
// George Clooney had a scooter accident so has to check out.  
// Remove him from our array of guests.  Use both the splice method 
// and the push method to add his name to 'grandHotelTremezzoPastGuests' 
// while simultaneously removing him from grandHotelTremezzoGuests. 
// Log both grandHotelTremezzoGuests and grandHotelTremezzoPastGuests in the same log statement.
grandHotelTremezzoPastGuests.push(grandHotelTremezzoGuests[0]);
grandHotelTremezzoGuests.splice(0, 1);

// ***Re-assign*** the variable that is equal to the number of guests staying 
// in our hotel by checking the items count of grandHotelTremezzoGuests array.  
// (Don't create a new variable)  Log this.
numberOfGuests = grandHotelTremezzoGuests.length;
console.log(numberOfGuests);

// The hotel is going to deliver a bottle of Nero de Como to each guest. 
// Use a for loop to log out '*Silvio Berlusconi* gets a bottle of Nero de Como' for each guest.
for (let i = 0; i < grandHotelTremezzoGuests.length; i++) {
  console.log('*' + grandHotelTremezzoGuests[i] + '* gets a bottle of Nero de Como');
}
// The guests drank their bottles of Nero de Como and are getting rowdy. 
// Tell them to be quiet by using a for loop to say ... '*Silvio Berlusconi* please hush up!!!'
for (let i = 0; i < grandHotelTremezzoGuests.length; i++) {
  console.log('*' + grandHotelTremezzoGuests[i] + '* please hush up!!!');
}
// Create an empty array sleepingGuests
const sleepingGuests = [];
// The guests passed out. Loop over the guests and add them to the sleepingGuests array.  
// (Don't remove them from grandHotelTremezzoGuests.) Log out sleepingGuests.
for (let i = 0; i < grandHotelTremezzoGuests.length; i++) {
  sleepingGuests.push(grandHotelTremezzoGuests[i]);
}
console.log(sleepingGuests);
// Lake Como has started to flood so all of the guests are fleeing to Milan. 
// Use splice to remove all of the guests (simultaneously using push to add them 
// to the array of checked out guests). Log both grandHotelTremezzoGuests 
// and grandHotelTremezzoPastGuests in the same log statement.
for (let i = grandHotelTremezzoGuests.length - 1; i >= 0; i--) {
  grandHotelTremezzoPastGuests.push(grandHotelTremezzoGuests[i]);
  grandHotelTremezzoGuests.splice(i, 1);
}
console.log(grandHotelTremezzoGuests);
console.log(grandHotelTremezzoPastGuests);

// Create a variable isGrandHotelTremezzoEmpty to be equal to a 
// boolean with the appropriate value (it is empty). Log this variable.
const isGrandHotelTremezzoEmpty = true;