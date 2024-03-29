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
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length)
        return false;
    var m = matrix.length;
    var n = matrix[0].length;
    // Convert 2D indices to a single index and vice versa
    var getIndex = function (index) {
        var row = Math.floor(index / n);
        var col = index % n;
        return [row, col];
    };
    var left = 0;
    var right = m * n - 1;
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2);
        var _a = getIndex(mid), row = _a[0], col = _a[1];
        if (matrix[row][col] === target) {
            return true;
        }
        else if (matrix[row][col] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return false;
}
// Example 1
var matrix1 = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
var target1 = 3;
console.log(searchMatrix(matrix1, target1)); // Output: true
// Example 2
var matrix2 = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
var target2 = 13;
console.log(searchMatrix(matrix2, target2)); // Output: false
