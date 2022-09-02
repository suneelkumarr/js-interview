//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

let nums = [0,1,0]
const moveZeros = (nums) =>{
    if(nums.length === 1){
        return nums
    }
    nums.sort()
    let zeroArray = []
    let nonZero = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0){
            zeroArray.push(nums[i])
        }else{
            nonZero.push(nums[i])
        }
    }
    const daraArray = nonZero.sort(function(a, b){return a - b})
   const  finalArray = [...daraArray,...zeroArray]
    return finalArray
}

console.log(moveZeros(nums))