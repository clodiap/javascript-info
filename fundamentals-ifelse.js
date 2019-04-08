// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”

let javascriptName = prompt('What is the “official” name of JavaScript?', '');

if (javascriptName == "ECMAScript") {
  alert("Right!")
} else {
  alert("Didn’t know? ECMAScript!")
}

// Using if..else, write the code which gets a number via prompt and then shows in alert:
//     1, if the value is greater than zero,
//     -1, if less than zero,
//     0, if equals zero.
// In this task we assume that the input is always a number.

let number = prompt("Choose a number", "");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// Rewrite this if using the ternary operator '?':
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message =
    (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? : 'Greetings':
    (login == '') ? : 'No login' :
    '';

