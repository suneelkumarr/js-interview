//https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1

// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4
// Example 2:

// Input:
// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9

// Your Task :
// You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)


// Constraints:
// 1 ≤ N ≤ 106
// 1 ≤ A[i] ≤ 106


let N = 10, A =[6,1,2,8,3,4,7,9,10,5] 

const missingNumber = (N,A) => {
    A.sort((a,b)=> a-b)
    for (let i = 0; i <A.length; i++) {
        if(A[i]+1 === A[i+1]){

        }else{
            return A[i]+1
        }
    }
}


function getMissingNo(a) {
    const n = a.length
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}

function getMissingNo(a, n)
{
    let i, total=1;
     
    for (i = 2; i<= (n+1); i++)
    {
        total += i;
        total -= a[i-2];
    }
    return total;
}

console.log(missingNumber(N,A))