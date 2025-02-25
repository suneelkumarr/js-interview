//https://practice.geeksforgeeks.org/problems/common-elements1132/1

// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
// Note: can you take care of the duplicates without using any additional Data Structure?

// Example 1:

// Input:
// n1 = 6; A = {1, 5, 10, 20, 40, 80}
// n2 = 5; B = {6, 7, 20, 80, 100}
// n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
// Output: 20 80
// Explanation: 20 and 80 are the only
// common elements in A, B and C.
 

// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function commonElements() which take the 3 arrays A[], B[], C[] and their respective sizes n1, n2 and n3 as inputs and returns an array containing the common element present in all the 3 arrays in sorted order. 
// If there are no such elements return an empty array. In this case the output will be printed as -1.

 

// Expected Time Complexity: O(n1 + n2 + n3)
// Expected Auxiliary Space: O(n1 + n2 + n3)

 

// Constraints:
// 1 <= n1, n2, n3 <= 10^5
// The array elements can be both positive or negative integers.


let A = [1, 5, 10, 20, 40, 80],B = [6, 7, 20, 80, 100],C = [3, 4, 15, 20, 30, 70, 80, 120]


const commanelement = (A,B,C) =>{
    const Data = []
    const upData = []
    for(let i = 0; i < A.length; i++){
        if(B.includes(A[i])){
            Data.push(A[i])
        }
    }
    for(let i = 0; i < Data.length; i++){
        if(C.includes(Data[i])){
            upData.push(Data[i])
        }
    }
    return upData
}


//O(n^2)
console.log(commanelement(A,B,C))



//// O(n)


const commonElement = (A, B, C) => {
    // Convert arrays A, B, and C into sets
    const setA = new Set(A);
    const setB = new Set(B);
    const setC = new Set(C);

    // Find the intersection of the three sets
    const result = [];
    for (let num of setA) {
        if (setB.has(num) && setC.has(num)) {
            result.push(num);
        }
    }

    return result;
};

// Example usage
let A = [1, 5, 10, 20, 40, 80];
let B = [6, 7, 20, 80, 100];
let C = [3, 4, 15, 20, 30, 70, 80, 120];

console.log(commonElement(A, B, C)); // Output: [20, 80]




