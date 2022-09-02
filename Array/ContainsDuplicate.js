//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// var containsDuplicate = function(nums) {
//     var finalvalue =  nums.length === new Set(nums).size
//     if(finalvalue === false){
//         return true;
//     }else{
//         return false
//     }
// };


// let nums = [1,1,1,3,3,4,3,2,4,2]
let nums = [1,2,3,4,5,6]
var containsDuplicate = function(nums) {
    const dataLength = nums.length
    const neArray = [... new Set(nums)].length
    finalData = dataLength === neArray

    if(finalData === false){
        return true
    }else {
        return false
    }
}

console.log(containsDuplicate(nums))
