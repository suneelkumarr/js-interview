//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/


// Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both 
//arrays and you may return the result in any order.
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000
 

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


// const nums1 = [1,2,4], nums2 = [1,2]
// let nums1 = [4,9,5], nums2 = [9,4,9,8,4]
let nums1 = [1,2,2,1], nums2 = [2,2]
const intersection = (nums1, nums2) => {
    const len1 = nums1.length 
    const len2 = nums2.length 
    nums1.sort()
    nums2.sort()

    const finalArray = []

    if(len1>len2){
       for(let i=0; i<len2; i++){
        for(let j=0; j<len1; j++){
            if(nums2[i] === nums1[j]){
                if(nums1[j] === nums1[j+1]){
                    finalArray.push(nums2[i])
                }else if(len2===1){
                    finalArray.push(nums2[i])
                }
            }
        }
       }
    }else if(len1 < len2){
        for(let i=0; i<len1; i++){
            for(let j=0; j<len2; j++){
                if(nums1[i] === nums2[j]){
                    if(nums2[j] === nums2[j+1]){
                        finalArray.push(nums1[i])
                    }else if(len1===1){
                        finalArray.push(nums1[i])
                    }
                }
            }
           }
    }else if(len1 === len2){
        return nums1
    }
    return finalArray

}
console.log(intersection(nums1, nums2))