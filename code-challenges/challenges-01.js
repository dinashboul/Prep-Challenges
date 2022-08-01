"use strict";

// --------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array.
//  Without using build-in methods.
//
//  Input: [12, 32, 22, 45, 78, 12, 50]
//  Output: 78

const findMax = (arr) => {
  let max;
  max = arr[0];
  for(let m = 1 ; m<arr.length; m++){
      if(arr[m]>max){
        max=arr[m];

                    }
            }
  // write your code here
  return max;
};
// --------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an array and returns the sum of the numeric values.
//  Inside the array (there could be strings), without using built-in methods (You can use `typeof`)
//
//  Input: [20, '234', 'car', 41, 20, 'chair']
//  Output: 81
const sumNums = (arr) => {
  let sum;
  sum=0;
  for (let n = 0 ; n < arr.length ; n++){
      if(typeof(arr[n]) === 'number'){
         sum=sum + arr[n];
      }
      
      

  }
  // write your code here
  return sum;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };