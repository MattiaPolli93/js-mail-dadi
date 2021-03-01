// Email: to check whether the user's input matches the email address inside the array

// Creating the array with the email-list
var emails = ["augustus@gmail.com", "tiberius@gmail.com", "caligula@gmail.com", "claudius@gmail.com", "nero@gmail.com"];

// Assigning variable to the user's input
var emailInput = prompt("Hello Emperor! Please insert your email:");

// Email address present in the array - email address not present in the array (variables):
var granted = "Welcome Sire, access has been granted!";
var denied = "Sorry, that is not a valid email address, access has been denied...";

// Checking
for (var i = 0; i < emails.length; i++) {
    if (emails[i] === emailInput) {
        document.getElementById("emailInput").innerHTML = granted;
    } else {
        document.getElementById("emailInput").innerHTML = denied;
    }
}