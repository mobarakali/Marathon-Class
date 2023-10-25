/** Solve these questions. */
/////////////////////////////////////////////////////////////////////
// Problem 1: Write a function to calculate the area of a triangle.
/////////////////////////////////////////////////////////////////////

// The most common method is to use the formula for the area of a
// triangle, which is: Area = 0.5 * base * height

function calculateAreaOfTriangle(base, height) {
  // Calculate the Area
  let area = 0.5 * base * height;
  return area;
}

console.log(calculateAreaOfTriangle(3.5, 4));

//////////////////////////////////////////////////////////////////
// Problem 2: Write a function to convert degrees to radians.
//////////////////////////////////////////////////////////////////

// To convert degrees to radians programmatically, the following formula can be used:
// Radians = Degrees * (π / 180)

function degreesToRadians(degrees) {
  // Convert degrees to radians
  let radians = degrees * (Math.PI / 180);
  return radians.toFixed(4); //
}

console.log(degreesToRadians(90));

//////////////////////////////////////////////////////////////////////////////////
// Problem 3: Create a function calculateFactorial that takes a number and
// returns its factorial.
/////////////////////////////////////////////////////////////////////////////////

// calculate the Factorial of a give number using recursive function

function calculateFactorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}
console.log(calculateFactorial(5));

/////////////////////////////////////////////////////////////////////////////////
// Problem 4: Create a function isPrime that takes a number as a parameter and
// returns true if it's a prime number, and false otherwise.
/////////////////////////////////////////////////////////////////////////////////

// Check if the given number Prime or not using the recursive function
function isPrime(number, divisor = 2) {
  // 2 is the smallest prime so I took the default value of 'divisor = 2'

  if (number <= 1) {
    return false;
  }

  if (divisor >= number) {
    return true;
  }

  if (number % divisor === 0) {
    return false; // Number is divisible by divisor, so it's not prime
  }

  // recursive function to increase divisor value
  // and check if it is Prime Number
  return isPrime(number, divisor + 1);
}

let num = 19;

if (isPrime(num)) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}

/////////////////////////////////////////////////////////////////////////////////
// Problem 5: Create a function mergeArrays that takes two arrays as parameters
// and returns a new array that merges both arrays.
/////////////////////////////////////////////////////////////////////////////////

// '.concat()' can help us to Marge 2 arrays
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [3, 2, 1]));

/////////////////////////////////////////////////////////////////////////////////
// Problem 6: Create a function isLeapYear that takes a year as a parameter and
// returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
/////////////////////////////////////////////////////////////////////////////////
function isLeapYear(year) {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0)) {
    return "This is a leap year";
  } else {
    return "Not Leap year";
  }
}

console.log(isLeapYear(2000)); //

/////////////////////////////////////////////////////////////////////////////////
// Problem 7: Create a function removeDuplicates that takes an array and returns 
// a new array with duplicates removed.
/////////////////////////////////////////////////////////////////////////////////

function removeDuplicates(array) {
  const cleanedArray = [];
  
  for (const item of array) {
      if (!cleanedArray.includes(item)) {
          cleanedArray.push(item);
      }
  }
  
  return cleanedArray;
}

const originalArray = [1, 1, 1, 11, 111, 50, 50, 54, 1];

const duplicatesRemoved = removeDuplicates(originalArray);

console.log(duplicatesRemoved);

/////////////////////////////////////////////////////////////////////////////////
// Problem 8: Create a function convertToCelsius that takes a temperature in 
// Fahrenheit and returns the equivalent temperature in Celsius.
/////////////////////////////////////////////////////////////////////////////////

let convertToCelsius = fahrenheit => { 

  return ((fahrenheit - 32) * 5 / 9).toFixed(2); // fixed to 2deciaml point.

}

console.log(convertToCelsius(55));
/////////////////////////////////////////////////////////////////////////////////
// Problem 9: Write a function to find the maximum of five numbers.
/////////////////////////////////////////////////////////////////////////////////

// Here we need to put all the five numbers as an array

function findMaxinFive(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++){  // This condition can count endless numbers not limited to only 5 numbers
    
    max < numbers[i] ? max = numbers[i] : max;
  }
  return max; 
}

console.log(findMaxinFive([1, 2, 3, 5, 4]));

/////////////////////////////////////////////////////////////////////////////////
// Problem 10: Create a function called evenOdd() that takes a string as 
// a parameter.Now you have to give the output based on the total number 
// of characters in your String.The output will be 'even' or 'odd'. 
// [Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
/////////////////////////////////////////////////////////////////////////////////

function evenOdd(str) {
  if (str.length % 2 === 0) {
    return "even";
  } else return "odd";
  
}

console.log(evenOdd('JavaScript'));
console.log(evenOdd('Hello'));

/****************************************************************************/

// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

// 2. What is JavaScript, and what is its primary purpose in web development?
/** Answer: ************************
JavaScript is a scripting language developed by Brendan Eich in the year 1995 for Netscape Navigator. JavaScript's primary purpose in web development is to enhance the user experience, add interactivity, and create dynamic, feature-rich web applications that work seamlessly across different browsers. Now, it is a fundamental technology for modern web development. */

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.
/** Answer: ************************
In JavaScript, there are three main ways to declare variables: var, let, and const. Each has distinct characteristics:
var: Variables declared with var are function-scoped, which means they are only accessible within the function in which they are declared. If declared outside any function, they become globally scoped. Variables declared with var are hoisted to the top of their scope, which means they are moved to the top during the compilation phase, making them available before their actual declaration in the code. var variables can be redeclared within the same scope without any error.

let: Variables declared with let are block-scoped, which means they are only accessible within the block, statement, or curly braces in which they are declared. let variables are not hoisted to the top of their scope, and they cannot be redeclared within the same scope.

const: Variables declared with 'const' are also block-scoped and cannot be reassigned once they are assigned a value. However, it's important to note that when you declare a variable using const, it doesn't mean the value itself is immutable. You can't reassign the variable to a further value, but if the value is an object, you can still modify its properties. */

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
/** Answer: ************************
 In JavaScript, "scope" refers to the context in which variables and functions are declared and accessed. It determines where in your code a particular variable or function is visible and can be used. Understanding scope is crucial for writing clean and error-free code. There are two main types of scope in JavaScript: global scope and local scope.
Global Scope:
Variables declared outside of any function or block have global scope. They can be accessed from anywhere in your JavaScript code.
Global variables are available throughout the entire program, making them accessible from functions, blocks, or anywhere else in your code.
However, global variables should be used with caution, as they can lead to naming conflicts and unintended side effects in complex applications.
Local Scope:
Variables declared inside a function, block, or a specific code construct have local scope. They are only accessible within the specific function or block in which they are defined.
Local scope helps in encapsulating variables and functions, preventing unintended interactions and providing data isolation.
Each function creates its own scope, so variables with the same name can exist in different functions without conflicts.  */

// 5. What is the difference between "null" and "undefined" in JavaScript?
/** Answer: ************************
 "null": In JavaScript, "null" is a value that represents the intentional absence of any object value or the lack of a value. When a variable has the value of "null", it means that no data is stored inside the variable or it is empty.
 
 "undefined": "undefined" in JavaScript means that a variable has been declared but not assigned a value.
 */
/************************************************************************************ */
// => Assignment Deadline + Marks:
// 1. Each question value is 5 marks.
// 2. The deadline to submit your assignment is October 25, 2023, at 8:00 PM.
