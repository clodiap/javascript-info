// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
//     Using a question mark operator ?
//     Using OR ||

function checkAge(age) {
  return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge(age) {
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

// Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b) {
    return ( a < b ) ? a : b ;
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// Run the demo
// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x,n) {
    return x ** n ;
}
function showResult(result) {
    alert(result);
}
let x = prompt("Choose a number");
let n = prompt("Choose a number to power the precedent number");
showResult(pow(x,n));

//  correction

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported,
    use an integer greater than 0`);
} else {
  alert( pow(x, n) );
}
