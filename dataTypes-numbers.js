// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// let a = +prompt("a?", "");
// let b = +prompt("b?", "");

// function sum(a,b) {
//   return a + b;
// }
// alert(sum(a,b));

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
  let input ;
  do{
    input = prompt("Enter a number", "");
  } while ( !(isFinite(input)) );

  if (input === '' || input === null) {
    return null
  }

  // return parseInt(input);
  return +input;
}

// alert(`Read: ${readNumber()}`);



// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525


// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

alert( random(1, 5) ); // 1
alert( random(1, 5) ); // 3
alert( random(1, 5) ); // 5
