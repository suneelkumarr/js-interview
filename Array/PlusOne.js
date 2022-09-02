//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const plusOne = (digits) =>{
    // const data = digits.join("")
    // let newDigits = (parseInt(data) + 1)
    // console.log(newDigits)
//    const dataArray = newDigits.split(',')

var ans = []
, add = 0
, len = digits.length;

digits[len - 1]++;

for(var i = len - 1; i >= 0; i--) {
var sum = digits[i] + add;
ans[i] = sum % 10;
add = ~~(sum / 10);
}

if (add)
ans.unshift(add);

return ans;


    
}

console.log(plusOne(digits))