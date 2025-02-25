//https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1


// Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.


// Example 1:

// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2
// Explanation: 
// arr[0] + arr[1] = 1 + 5 = 6 
// and arr[1] + arr[3] = 5 + 1 = 6.

// Example 2:

// Input:
// N = 4, K = 2
// arr[] = {1, 1, 1, 1}
// Output: 6
// Explanation: 
// Each 1 will produce sum 2 with any 1.

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function getPairsCount() which takes arr[], n and k as input parameters and returns the number of pairs that have sum K.


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 <= N <= 105
// 1 <= K <= 108
// 1 <= Arr[i] <= 106



let N = 4, K = 2,  arr =[1, 1, 1, 1]

const countPair = (N, K, arr) =>{
    const pair = []
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            if((arr[i] + arr[j]) === K){
                pair.push([arr[i], arr[j]])
            }
        }
    }
    return pair.length
} 
console.log(countPair(N, K, arr))



//O(n)

const countPair = (N, K, arr) => {
    const freqMap = new Map(); // To store the frequency of elements
    let pairCount = 0;         // To count valid pairs

    for (let i = 0; i < arr.length; i++) {
        const complement = K - arr[i]; // Calculate the complement needed to form the sum K

        // If the complement exists in the map, add its frequency to the pair count
        if (freqMap.has(complement)) {
            pairCount += freqMap.get(complement);
        }

        // Update the frequency of the current element in the map
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }

    return pairCount;
};

// Example usage
let N = 4, K = 2, arr = [1, 1, 1, 1];
console.log(countPair(N, K, arr)); // Output: 6

// function countPair(K,inputArr) { 
//     let n = inputArr.length;
//         const pair = [];
//     for(let i = 0; i < n; i++) {
//         // Finding the smallest number in the subarray
//         let min = i;
//         for(let j = i+1; j < n; j++){
//             if(inputArr[j] + inputArr[min] === K) {
//                 pair.push([inputArr[j],inputArr[min]])
//                 min=j; 
//             }
//          }
//          if (min != i) {
//              // Swapping the elements
//              let tmp = inputArr[i]; 
//              inputArr[i] = inputArr[min];
//              inputArr[min] = tmp;      
//         }
//     }
//     // console.log(pair)
//     // return inputArr;
//     console.log(pair)
//     return pair.length;
// }
// console.log(countPair(K,arr))

// let sumArray=[]
// let finalArray=[]
// function countPairs(a,k){
// 	for(let i=0;i<a.length;i++){
//   		if(i==a.length-1){
//       break
//       }
//   		for(let j=i+1;j<a.length;j++){
//       let sum=a[i]+a[j]
//       if(sum==k){
//       sumArray.push(a[i])
//        sumArray.push(a[j])
//        finalArray.push(sumArray)
//       }
//       sumArray=[]
//       }
//   }
//   console.log(finalArray)
//   return finalArray.length
// }
// console.log(countPairs(arr,K))
