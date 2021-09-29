const { removeAllListeners } = require("process");

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  console.log(newArray);
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];
printArray(2);

function remainder(x, y) {
  if (x > 0 && y > 0) {
    console.log(x % y);
  }
}
remainder(2, 4);

// ----------------------------------------------------------------------------------

function bitwiseAND(n1, n2) {
  let a = n1;
  let b = n2;
  console.log(a & b);
}

function bitwiseOR(n1, n2) {
  let a = n1;
  let b = n2;
  console.log(a | b);
}

function bitwiseXOR(n1, n2) {
  let a = n1;
  let b = n2;
  console.log(a ^ b);
}

bitwiseAND(7, 12);
bitwiseOR(7, 12);
bitwiseXOR(7, 12);

// --------------------------------------

function calculateFuel(n) {
  let a = n * 10;
  if (a < 100) {
    return 100;
  } else {
    return a;
  }
}
calculateFuel(3);

// --------------------------

function animals(chickens, cows, pigs) {
  let legs = chickens * 2 + cows * 4 + pigs * 4;
  console.log(legs);
}

animals(2, 3, 5);

// --------------------------

function points(twoPointers, threePointers) {
  let a = twoPointers * 2;
  let b = threePointers * 3;
  let final = a + b;
  console.log(final);
}
points(1, 1);

// --------------------------

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}

addUp(13);

// ---------------------------------------------

function makesTen(a, b) {
  if (a == 10 || b == 10 || a + b == 10) {
    return true;
  } else {
    return false;
  }
}

// ---------------------------------------------

function checkEquality(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// -=---------------------------------------------------

function shiftToLeft(x, y) {
  console.log(x ** y);
}

shiftToLeft(10, 3);

// -=---------------------------------------------------

//find min
//find max

function minMax(arr) {
  for (let i = 0; i < arr.length; i++) {}
}

// -=---------------------------------------------------

// Q? => Is it Christmas eve?
//  determine date
// do we put out milk and cookies or not?
//  if date is christmas 24 put cookies out
//  if not, don't

const christmas = new Date("August 19, 1975 23:15:30");
function timeForMilkAndCookies(date) {
  const dateDays = christmas.getDate();
  const dateMonth = christmas.getMonth();

  console.log(dateDays);
  console.log(dateMonth);
  if (dateDays == 24 && dateMonth == 11) {
    return true;
  } else {
    return false;
  }
}

timeForMilkAndCookies();

// -=---------------------------------------------------

// Goal -> return string indicating which function returned the biggest number
//  Call f
//  Call G
//  determine which returned a larger number

function whichIsLarger(f, g) {
  let a = f();
  let b = g();
  if (a > b) {
    return "f";
  } else if (a < b) {
    return "g";
  } else {
    return "neither";
  }
}

// -=---------------------------------------------------

// Goal -> returns a base-2 (binary) representation of a base-10 (decimal) string number
//  convert to string
//
//

function binary(decimal) {
  let a = decimal.toString();
  console.log(a);
}

binary(100);

//

function frames(minutes, fps) {
  let frames = minutes * (fps * 60);
  return frames;
}

frames(10, 1);

//

function comp(str1, str2) {
  let a = str1;
  let b = str2;
  if (a.length == b.length) {
    return true;
  } else {
    return false;
  }
}

//

function calculator(str) {
  let a = str;
  let b = eval(a);
  console.log(b);
}

calculator("23+4*12*1054");

//

function divisible(num) {
  if (num % 100 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

divisible(10000);

//

function dividesEvenly(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

//
// Q? How many walls can be painted?
// 1. Find area of each wall
// 2. Figure out how many wall areas can fit into the square meters avalible

function howManyWalls(n, w, h) {
  let wallArea = w * h;
  let b = n / wallArea;
  let total = Math.floor(b);
  console.log(total);
}

howManyWalls(41, 3, 6);

//

function returnNegative(n) {
  if (n > 0) {
    return -n;
  } else {
    return n;
  }
}

//

function area(h, w) {
  if (h > 0 && w > 0) {
    return h * w;
  } else {
    return -1;
  }
}

//

function stringInt(str) {
  let a = parseInt(str);
  console.log(a);
}

stringInt("454");

//
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
// This is calculated by subtracting the number of downvotes from upvotes.
// Q? What is the vote total?
// 1. Count all up votes
// 2. subtract downvotes

function getVoteCount(votes) {
  var voteCount = new Object();
  voteCount.upvotes = votes.upvotes;
  voteCount.downvotes = votes.downvotes;
  let count = voteCount.upvotes - voteCount.downvotes;

  // console.log(voteCount.upvotes)
  // console.log(voteCount.downvotes)
  // console.log(count)
  return count;
}

getVoteCount({ upvotes: 13, downvotes: 0 });

//

// Write a function that returns the length of a string. Make your function recursive.
// Q? -> What is the string length?
// 1. Set up var
// 2. set up Loop
// 3.

function length(str) {
  return str.length;
}

// Given two arguments, return an array which contains these two arguments.
// Goal -> return array with args
// 1. create array
// 2. insert args into

function makePair(num1, num2) {
  let newArray = [num1, num2];
  console.log(newArray);
}

makePair(2, 738);

//

// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(n) {
  if (Number.isInteger(n / 5)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

divisibleByFive(6);

//

// Create a function that takes a number n and returns the nth even number.

function nthEven(n) {}

// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}

// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
// function isSeven(x) {
// 	return x="7"?false:true:false;
// }

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
  return num + 1;
}

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
  let a = x % y;
  console.log(a);
}
remainder(7, 2);

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

function leapYear(year) {
  //three conditions to find out the leap year
  if ((year % 4 == 0 && 0 != year % 100) || 0 == year % 400) {
    console.log("true");
  } else {
    console.log("false");
  }
}
const year = 2004;

leapYear(year);

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
  // Check if 15+
  // check if parent around
  if (age >= 15 || isSupervised == true) {
    return true;
  } else {
    return false;
  }
}

// Given an index and an array, return the value of the array with the given index.
// goal -> return index val of an arr
function valueAt(arr, i) {
  /* find index avl of arr */
  let a = arr[i];
  return a;
}

// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//is age >= 18
// is he on break
function shouldServeDrinks(age, onBreak) {
  if (age > 17 && onBreak == false) {
    return true;
  } else {
    return false;
  }
}

// Write a function to reverse an array.
function reverse(arr) {
  let a = arr;
  return a.reverse();
}

// Create a function that takes a number n and returns the nth even number.
function nthEven(n) {
  let a = n * 2 - 2;
  console.log(a);
}
nthEven(4);

// I'd like to calculate how long on average I've lived in a single house.

// Given a person's age and the number of times they've moved house as moves,
// return the average number of years that they've spent living in the same house.
function yearsInOneHouse(age, moves) {
  let a = age / (moves + 1);
  let b = Math.round(a);
  console.log(b);
}

yearsInOneHouse(15, 2);

// Given an index and an array, return the value of the array with the given index.
function valueAt(arr, i) {
  let a = Math.floor(i);
  console.log(arr[a]);
}

valueAt([1, 2, 3, 4, 5, 6], 10 / 2);

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
function inchesToFeet(inches) {
  let a = Math.floor(inches / 12);
  return a;
}

// Write a function that uses the ternary operator to return "yeah" if b is true, and "nope" otherwise.
function yeah_nope(bool) {
  return bool ? "yeah" : "nope";
}

// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the
// given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
const arr = [1, 2, 3, 4, 5, 6];
{
  let a = arr[0];
  let b = arr[1];
}

// Create a function that calculates the chance of being an imposter. The formula for the chances of being an
// imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value
// to the nearest integer and return the value as a percentage.
// ?? what is the chance of being an imposter?
// 1.
function imposterFormula(i, p) {
  let a = 100 * (i / p);
  let b = Math.round(a);
  console.log(b);
}
imposterFormula(3, 7);

// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off).
// In other words, for a given number of switches, how many different patterns of on and off can we have?
// 1. count switches using a loop => i
// 2. for each switch *2
function posCom(num) {
  return Math.pow(2, num);
}
posCom(3);

// --------

// Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// MAin Q = can arr 1 be nested inside arr 2?
//   chekc is arr1 min > arr2 min
//     if true = answer is yes
//   check is arr1 max < arr2 max
//     if true = yes

function canNest(arr1, arr2) {
  let Arr1min = Math.min(...arr1);
  let Arr2min = Math.min(...arr2);
  let Arr1max = Math.max(...arr1);
  let Arr2max = Math.max(...arr2);

  if (Arr1min > Arr2min && Arr1max < Arr2max) {
    console.log(true);
  } else {
    console.log(false);
  }
}
canNest([1, 2, 3, 4], [0, 6]);

//////
// Create a function that takes a base number and an exponent number and returns the calculation.
// Q? What is the calculation
//   take number and put it by its exponent

function calculateExponent(num, exp) {
  let a = num ** exp;
  return a;
}

//////////////
// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans.
// For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.
// Goal -> switch given boolean
//   1. check param to see if true or false
//   2. switch to  1 and 0
function flipBool(b) {
  if (b === true) {
    return 0;
  } else if (b === false) {
    return 1;
  } else if (b > 0) {
    return 0;
  } else {
    return 1;
  }
}

////
// Create a function that takes a word and returns the new word without including the first character.
// Goal -> return word withouth index 0
//   take given word
//   take first letter off
//   return word without first letter

function newWord(str) {
  let a = str.substring(1);
  console.log(a);
}
newWord("apple");

/////////////////////

// // Create a function which returns the number of true values there are in an array.
// Q? -> How many true values in the Array
//   1. Count how many

function countTrue(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      a++;
    }
  }
  return a;
}

//
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
// Main Q? -> is it possible to get a bonus when you roll the dice? You can't move backwards.
// 1 check if pos or neg
// 2 Figure if you are before or after the first roll
//   1. if after return false is before continue
// 3 figure if you are within 6 of the first roll
//   1. if after return false is before continue
function possibleBonus(a, b) {
  let c = b - a;
  if (a >= 0 && b >= 0 && a < b && c < 7) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

possibleBonus(1, 9);

//                                                     4333333333333333333333333333333333333333333333333333333333
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator.
// Use the operator on number 1 and 2.
// Q? -> What is the answer?
//   plug into formula

function operate(num1, num2, operator) {
  let a = num1 + operator + num2;
  console.log(a);
  return a;
}
operate(1, 1, "+");

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// Q? => Which of the two given numbers are larger
// 1. split the given numbers
// 2. Compare the two
// 3. if the first is bigger => true, if not => false
function largestSwap(num) {
  let a = num;

  console.log(a.charAt(1, 2));
}
largestSwap(432);
