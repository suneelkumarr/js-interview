//https://practice.geeksforgeeks.org/problems/count-subarrays-with-equal-number-of-1s-and-0s-1587115620/1

// Given an array containing 0s and 1s. Find the number of subarrays having equal number of 0s and 1s.

// Example 1:

// Input:
// n = 7
// A[] = {1,0,0,1,0,1,1}
// Output: 8
// Explanation: The index range for the 8 
// sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), 
// (4, 5) ,(2, 5), (0, 5), (1, 6)
// Example 2:

// Input:
// n = 5
// A[] = {1,1,1,1,0}
// Output: 1
// Explanation: The index range for the 
// subarray is (3,4).
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function countSubarrWithEqualZeroAndOne() which takes the array arr[] and the size of the array as inputs and returns the number of subarrays with equal number of 0s and 1s.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

// Constraints:
// 1 <= n <= 106
// 0 <= A[i] <= 1

const arr = [1,0,0,1,0,1,1], n=7

function countSubarrWithEqualZeroAndOne(arr, n)
{
    var mp = new Map();
    var sum = 0;
    let count = 0;
     
    for (var i = 0; i < n; i++) {
        //Replacing 0's in array with -1
        if (arr[i] == 0)
            arr[i] = -1;
  
        sum += arr[i];
        console.log("sum",sum)
  
        //If sum = 0, it implies number of 0's and 1's are
        //equal from arr[0]..arr[i]
        if (sum == 0)
            count += 1;
  
        if (mp.has(sum) == true)
            count += mp.get(sum);
                 
        if(mp.has(sum) == false)
            mp.set(sum, 1);
        else
            mp.set(sum, mp.get(sum)+1);
    }
      return count;
}

console.log(countSubarrWithEqualZeroAndOne(arr, n))