//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/

// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?


// let nums = [1,2,3,4,5,6,7], k = 3
// let nums = [-1,-100,3,99], k = 2
let nums = [-1,-100,3,99,3,5,2,1], k = 4

// var rotate = function(nums, k) {
//     k %= nums.length;
// var tmp = [];
// if (k)
//   tmp = nums.slice(-k);
// nums.splice(-k, k);

// Array.prototype.unshift.apply(nums, tmp);
// };

// var rotate = function(nums, k) {
//     for(let i=0;i<k;i++){
//     let b=nums[nums.length-1]
//     let a=nums.splice(-1)
//     nums.splice(0,0,b)
//     }
//     return nums
// };

// var rotate = function(nums, k) {
//     for(let i=0;i<k;i++){
//     let b=nums[nums.length-1]
//     let a=nums.splice(-1)
//     nums.unshift(b)
//     }
//     return nums
// };


var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
    	let a=nums.pop()
      nums.unshift(a)
    }
    return nums
};

console.log(rotate(nums, k))