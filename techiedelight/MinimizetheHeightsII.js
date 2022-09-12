//https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1?page=1&category[]=Arrays&category[]=Strings&sortBy=submissions


// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


// Example 1:

// Input:
// K = 2, N = 4
// Arr[] = {1, 5, 8, 10}
// Output:
// 5
// Explanation:
// The array can be modified as 
// {3, 3, 6, 8}. The difference between 
// the largest and the smallest is 8-3 = 5.
// Example 2:

// Input:
// K = 3, N = 5
// Arr[] = {3, 9, 12, 16, 20}
// Output:
// 11
// Explanation:
// The array can be modified as
// {6, 12, 9, 13, 17}. The difference between 
// the largest and the smallest is 17-6 = 11. 

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function getMinDiff() which takes the arr[], n, and k as input parameters and returns an integer denoting the minimum difference.


// Expected Time Complexity: O(N*logN)
// Expected Auxiliary Space: O(N)

// Constraints
// 1 ≤ K ≤ 104
// 1 ≤ N ≤ 105
// 1 ≤ Arr[i] ≤ 105      



const a = [1, 15, 10],k =6, n=3
// const  getMinDiff = (a,k) => {
//     a.sort((a,b) => a - b);
//     let tempmin, tempmax;
//     tempmin = a[0];
//     tempmax = a[a.length - 1];
//     let ans =  a[0] - a[a.length -1] //maximum diff
//     for(let i = 0; i <a.length; i++) {
//         tempmin= Math.min(a[0] + k,a[i] - k); // Minimum element when we
//         // add k to whole array
//          tempmax = Math.max(a[i - 1] + k, a[a.length - 1] - k); // Maximum element when we
//                  // subtract k from whole array
//          ans = Math.min(ans, tempmax - tempmin); 
//     }

//     return ans
// }

function getMinDiff(arr,n,k)
{
    arr.sort((a,b) => (a-b))
    let ans = arr[n - 1] - arr[0]; // Maximum possible height difference
  
    let tempmin, tempmax;
    tempmin = arr[0]+k;
    tempmax = arr[n - 1]-k;
  
    for (let i = 1; i < n; i++) {
        tempmin= Math.min(arr[0] + k,arr[i] - k); 
        tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        ans = Math.min(ans, tempmax - tempmin); 
    }
    return ans;
    
}

console.log(getMinDiff(a,n,k));