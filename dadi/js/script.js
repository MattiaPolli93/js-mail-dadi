// To generate a random number between 1 and 6, winner gets the highest number
// Welcome message
alert("Welcome! Want to play a game? Pick a number between 1 and 6 (Your number will be displayed on the left)");

// Assigning variables and generating random numbers
var userResult = (Math.floor(Math.random() * 6) + 1);
var computerResult = (Math.floor(Math.random() * 6) + 1);

// DOM manipulation
document.getElementById("user-result").innerHTML = userResult;
document.getElementById("computer-result").innerHTML = computerResult;

// Winner declaration
if (userResult > computerResult) {
    document.getElementById("result").innerHTML = "Congratulations, You won!!! <br> (Reload if you want to give it another try)";
} else if (userResult < computerResult) {
    document.getElementById("result").innerHTML = "Oh no, the Computer won... <br> (Reload if you want to give it another try)";
} else if (userResult == computerResult) {
    document.getElementById("result").innerHTML = "Draw <br> (Reload if you want to give it another try)";
}