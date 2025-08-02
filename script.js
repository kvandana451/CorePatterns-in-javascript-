// Nested Loops Pattern

// UsesCases:
// Compare each element with every other element
// Explore all possible pairs
// Explore all ranges/subarrays/substrings

// consider the example1 :
// "I want to generate all substrings"

// That means:

// I need to consider every start index in the string

// And from each start, every end index that comes after

// So:

// First loop = "From where should the substring start?"

// Second loop = "Where should the substring end?"

// example2:
// "Find all pairs in an array that sum to 10"
// Say the array is [1, 4, 6, 9].
// You need to compare every element with every other element
// 1 with 4, 1 with 6, 1 with 9, then 4 with 6, etc.
// Your thought flow becomes:
// First loop = Pick one number
// Second loop = Compare that number with all numbers after it

//TYPE1:PAIR-WISE COMPARISIONS:
// PURPOSE:Compare each element with the next ones.
//  "Given:Print all pairs in an array"
// input:[1,2,3]
// output:
// 1   2
// 1   3
// 2   3
function printPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
printPairs([1, 2, 3]);

// PROBLEM1:
// "Given an array, find all unique pairs that add up to a given sum."
function findUniquePairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 9) {
        console.log(array[i], array[j]);
      }
    }
  }
}
findUniquePairs([2, 4, 3, 5, 7]);

// TYPE2:FULL COMPARISIONS:
// Purpose: Compare every element with every other (including earlier ones) and itself
// input:[1,2,3]
// output:
// 1   2
// 1   3
// 2   3
// 1   1
// 1   2
// 1   3
// 2   1
// 2   2
// 2   3
// 3   1
// 3   2
// 3   3
function displayPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
displayPairs([1, 2, 3]);

// PROBLEM STATEMENT:
// Find common elements between 2 arrays
function commonElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log(array1[i]);
      }
    }
  }
}
commonElements([1, 2, 3, 4], [3, 4, 5, 6]);

// TYPE3:Nested Arrays Traversal (Matrix/Grid)
// gOAL:When you have a 2D array (array of arrays), you need two loops:

// Outer loop → To access each row.

// Inner loop → To access each column/item in that row.

// problem statement:Print all elements of a matrix"
//
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function elementsofMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}
elementsofMatrix(matrix);

// TYPE4:All Combinations Pattern
// You want to form all possible pairs, and this time order matters.
// (1,2) and (2,1) are considered different pairs.
//PROBLEM: Generating all possible Pairs

function generatePlayers(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j) console.log(arr[i], arr[j], i, j);
    }
  }
}
generatePlayers(["A", "B", "C"]);

// TYPE5:Nested Data Structures (Objects/JSON inside Arrays)?
// Problem:"Print Each Student's Subjects"
const students = [
  { name: "Alice", subjects: ["Math", "Science"] },
  { name: "Bob", subjects: ["English", "History"] },
  { name: "Charlie", subjects: ["Physics"] },
];
for (let i = 0; i < students.length; i++) {
  console.log("Student", students[i].name);
  for (j = 0; j < students[i].subjects.length; j++) {
    console.log("Subject", students[i].subjects[j]);
  }
}
