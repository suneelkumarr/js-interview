//https://practice.geeksforgeeks.org/problems/find-duplicates-in-an-array/1?page=1&category[]=Arrays&category[]=Strings&sortBy=submissions

// Given an array a[] of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.

// Example 1:

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output: -1
// Explanation: N=4 and all elements from 0
// to (N-1 = 3) are present in the given
// array. Therefore output is -1.
// Example 2:

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output: 2 3 
// Explanation: 2 and 3 occur more than once
// in the given array.
// Your Task:
// Complete the function duplicates() which takes array a[] and n as input as parameters and returns a list of elements that occur more than once in the given array in sorted manner. If no such element is found, return list containing [-1]. 

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).
// Note : The extra space is only for the array to be returned.
// Try and perform all operation withing the provided array. 

// Constraints:
// 1 <= N <= 105
// 0 <= A[i] <= N-1, for each valid i

const a= [1, 6, 3, 1, 3, 6, 6]
const duplicates = (a) =>{
    const dataString =  a
    const track = {};
    for(let i=0; i<dataString.length; i++){
      const char = dataString[i];
      if (char in track) {
        track[char] = null;
      } else {
        track[char] = i;
      }
    }
    for(let key of Object.keys(track)){
      if(track[key] !== null){
        delete track[key];
      }
    }
    return Object.keys(track).length === 0 ? -1 : Object.keys(track);
}

console.log(duplicates(a))




const duplicates = (a) => {
    const seen = new Set();  // To track elements we've seen
    const duplicates = new Set();  // To track duplicate elements

    for (let num of a) {
        if (seen.has(num)) {
            duplicates.add(num);  // Add to duplicates if already seen
        } else {
            seen.add(num);  // Add to seen if not already present
        }
    }

    // Convert duplicates set to array
    const result = Array.from(duplicates);

    // Return -1 if no duplicates, otherwise return the array of duplicates
    return result.length === 0 ? -1 : result;
};

// Example usage
const a = [1, 6, 3, 1, 3, 6, 6];
console.log(duplicates(a));  // Output: [1, 6, 3]
