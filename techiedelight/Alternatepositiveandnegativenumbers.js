//https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1

// Given an unsorted array Arr of N positive and negative numbers. Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
// Note: Array should start with positive number.
 

// Example 1:

// Input: 
// N = 9
// Arr[] = {9, 4, -2, -1, 5, 0, -5, -3, 2}
// Output:
// 9 -2 4 -1 5 -5 0 -3 2
// Explanation : Positive elements : 9,4,5,0,2
// Negative elements : -2,-1,-5,-3
// As we need to maintain the relative order of
// postive elements and negative elements we will pick
// each element from the positive and negative and will
// store them. If any of the positive and negative numbers
// are completed. we will continue with the remaining signed
// elements.The output is 9,-2,4,-1,5,-5,0,-3,2.


// Example 2:

// Input: 
// N = 10
// Arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output:
// 5 -5 2 -2 4 -8 7 1 8 0 
// Explanation : Positive elements : 5,2,4,7,1,8,0
// Negative elements : -5,-2,-8
// As we need to maintain the relative order of
// postive elements and negative elements we will pick
// each element from the positive and negative and will
// store them. If any of the positive and negative numbers
// are completed. we will continue with the remaining signed
// elements.The output is 5,-5,2,-2,4,-8,7,1,8,0.


// Your Task:  
// You don't need to read input or print anything. Your task is to complete the function rearrange() which takes the array of integers arr[] and n as parameters. You need to modify the array itself.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 ≤ N ≤ 107
// -106 ≤ Arr[i] ≤ 107

const a = [9, 4, -2, -1, 5, 0, -5, -3, 2,-3,-7]
const Alternative = (a) => {
    let positive = []
    let negative = []
    for(i=0; i<a.length; i++){
        if(a[i]>=0){
            positive.push(a[i])
        }else{
            negative.push(a[i])
        }
    }          

    for(i = 0;i < positive.length - 1; i = i + 2){
        positive.splice(i + 1, 0, -1);
      }
    //   let k=0
    //   for(i = 0; i < positive.length;i++){
    //     for(j = 0; j < negative.length; j++){
    //         if(positive[i]=== -1){
    //             console.log(j,positive[i])
    //             // console.log(negative[j+k])
    //             positive[i] = negative[j+k]
    //             k++
    //         }
    //     }
    // }
      console.log(positive)
                       m 
    
}

console.log(Alternative(a))