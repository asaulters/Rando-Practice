"use strict";

const x = 23;
if (x === 23) console.log(23);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temp2 = [-5, -8, 5, 10, 8, "error", 4, 6, -1, 12, 18, 22];
// 1. understanding the problem
// what is temp amplitude? diff between highest and lowest temp
// how to calc the max and min temps?
// what does a sensor error look like? and what to do?

// 2. break up into smaller sub probs
// how to ignore errors
// find max val in array
// find min valeu in array
// subtract min from max (amplitude) and return
let finalTemp = temperatures.concat(temp2);
console.log(finalTemp);
const callTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min);
  console.log(max);

  return max - min;

  // let maxNum = Math.max.apply(Math, temperatures);
  // console.log(maxNum)
};

const amplitude = callTempAmplitude(finalTemp);
console.log(amplitude);

// func should recieve 2 arrays of temps

// 1. understand
// Wuth 2 arrays should we implement function twicxe? No Merge 2 arrays

// 2. Sub probs
// how to merge 2 arrays?
