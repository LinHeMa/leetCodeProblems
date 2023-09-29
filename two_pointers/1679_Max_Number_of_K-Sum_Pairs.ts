/** 
1679_Max_Number_of_K-Sum_Pairs

Hint
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.



Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find two numbers in an array that add up to k, and we should not count duplicates. So, I would like to start by sorting the array.
# Approach
<!-- Describe your approach to solving the problem. -->
First thing first, sort the array.

That's assume k equals to 5 for 2 examples.
```
ex 1 
1 2 3 4
l     r --> l + r = k ,so l ++
  l   r --> l + r > k , r --
  l r   --> l + r = k , so l++ ,but l === r break.
```
```
  ex.2
1 3 5 7 9
l       r  => l + r > k ,so  r--
l     r    => l + r > k ,so  r--
l   r      => l + r > k ,so  r--       
l r        => l + r > k ,so  r--       
l r        => l === r  ,so  break   
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
JS's sort method => O(nlog(n))
and the while loop is O(n) 
so the time complexity = O(nlog(n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
JS's sort method => O(n)
and my other variables are also O(n)
so the Space complexity equals O(n)

*/

function maxOperations(nums: number[], k: number): number {
  let result: number = 0;
  let left: number = 0;
  let right: number = nums.length - 1;
  const sortedNums = nums.sort((a, b) => a - b);
  while (left < right) {
    if (sortedNums[left] + sortedNums[right] === k) {
      result++;
      left++;
      right--;
    }
    if (sortedNums[left] + sortedNums[right] > k) {
      right--;
    }
    if (sortedNums[left] + sortedNums[right] < k) {
      left++;
    }
  }
  return result;
}

const ans = maxOperations([3,1,3,4,3], 6);
console.log(ans);
