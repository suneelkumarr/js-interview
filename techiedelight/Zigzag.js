//https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1?page=1&category[]=Arrays&category[]=Strings&curated[]=1&sortBy=submissions

// Given an array arr of distinct elements of size N, the task is to rearrange the elements of the array in a zig-zag fashion so that the converted array should be in the below form: 

// arr[0] < arr[1]  > arr[2] < arr[3] > arr[4] < . . . . arr[n-2] < arr[n-1] > arr[n]. 

// .

// Example 1:

// Input:
// N = 7
// Arr[] = {4, 3, 7, 8, 6, 2, 1}
// Output: 3 7 4 8 2 6 1
// Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
// Example 2:

// Input:
// N = 4
// Arr[] = {1, 4, 3, 2}
// Output: 1 4 2 3
// Explanation: 1 < 4 > 2 < 3
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function zigZag() which takes the array of integers arr and n as parameters and returns void. You need to modify the array itself.
// NOTE: In the mentioned complexity, only a unique solution will exist.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N <= 105
// 0 <= Arri <= 106

const arr = [4, 3, 7, 8, 6, 2, 1]

const  zigZag = (arr,n) =>{
    let flag = true;
    let temp = 0;
    for (let i=0; i<=arr.length-2; i++)  
{  
if (flag)  
{  
//execute if elements are in the order a > b > c  
if (arr[i] > arr[i+1])  
{  
//swapping logic  
temp = arr[i];  
arr[i] = arr[i+1];  
arr[i+1] = temp;  
}  
}  
else  
{  
//execute if elements are in the order a < b < c  
if (arr[i] < arr[i+1])  
{  
//swapping logic  
temp = arr[i];  
arr[i] = arr[i+1];  
arr[i+1] = temp;  
}  
}  
if(flag==true)  
flag=false;  
else  
flag=true;  
}  
    }


    console.log(zigZag(arr,arr.length))