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
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log("true");
  } else {
    console.log("false");
  }
}
