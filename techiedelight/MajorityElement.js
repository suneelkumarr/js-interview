//https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1?page=1&category[]=Arrays&category[]=Strings&sortBy=submissions

// Given an array A of N elements. Find the majority element in the array. A majority element in an array
// A of size N is an element that appears more than N/2 times in the array.
 

// Example 1:

// Input:
// N = 3 
// A[] = {1,2,3} 
// Output:
// -1
// Explanation:
// Since, each element in 
// {1,2,3} appears only once so there 
// is no majority element.
// Example 2:

// Input:
// N = 5 
// A[] = {3,1,3,3,2,2} 
// Output:
// 3
// Explanation:
// Since, 3 is present more
// than N/2 times, so it is 
// the majority element.

// Your Task:
// The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.
 

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).
 

// Constraints:
// 1 ≤ N ≤ 107
// 0 ≤ Ai ≤ 106


const a=[1,2,3]
k=2

const majority = (a) => {
  let obj = {}
  let count = 0;
  k=2
  // let track = {}
  //   for(let i=0; i<a.length; i++){
  //       const char = a[i];
  //       if (char in track) {
  //         track[char]+=1;
  //       } else {
  //         track[char] = 1;
  //       }
  //   }

  //   let sortable = Object.entries(track)
  //   .sort(([,a],[,b]) => b-a)

  //   if(parseInt(sortable[0][0]) === 1){
  //     return -1
  //   }else{
  //     const newData = parseInt(sortable[0][0])
  //     return newData
  //   }

  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      obj[a[i]] = obj[a[i]] + 1
    } else {
      obj[a[i]] = ++count
    }
    count = 0
    if (obj[a[i]] == k) {
      return a[i]
    }
  }

  return -1
  
}

// const majority = (nums) => {
//   var hash = [];
//   for(var i = 0, len = nums.length; i < len; i++) {
//     if (!hash[nums[i]]) hash[nums[i]] = 1;
//     else hash[nums[i]]++;

//     if (hash[nums[i]] > len / 2)
//       return nums[i];
//   }
//   console.log(hash)
// }

console.log(majority(a))