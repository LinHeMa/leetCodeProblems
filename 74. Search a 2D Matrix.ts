/**
74. Search a 2D Matrix
Solved
Medium
Topics
Companies
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */

function searchMatrix(matrix: number[][], target: number): boolean {
  // check if the matrix is empty
  if (!matrix.length || !matrix[0].length) return false;

  let m = matrix.length;
  let n = matrix[0].length;

  // Convert 2D indices to a single index and vice versa
  // transforming a 2D matrix into a virtual 1D array
  // so we can apply binary search.
  const getIndex = (index: number): [number, number] => {
    let row = Math.floor(index / n);
    let col = index % n;
    return [row, col];
  };

  let left = 0;
  // all the number
  let right = m * n - 1;

  // basic binary search
  // mid is matrix[r][c]
  while (left <= right) {
    // use left + Math.floor((right - left) / 2); instead of Math.floor((left + right)/2)
    // The approach left + Math.floor((right - left) / 2) ensures that the middle index
    // is always computed in a way that avoids owverflow and maintains precision
    let mid = left + Math.floor((right - left) / 2);
    let [row, col] = getIndex(mid);
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Example 1
let matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target1 = 3;
console.log(searchMatrix(matrix1, target1)); // Output: true

// Example 2
let matrix2 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target2 = 13;
console.log(searchMatrix(matrix2, target2)); // Output: false
