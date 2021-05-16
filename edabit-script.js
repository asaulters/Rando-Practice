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
