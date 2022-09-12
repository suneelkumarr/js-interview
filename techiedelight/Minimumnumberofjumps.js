//https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1?page=1&category[]=Arrays&category[]=Strings&sortBy=submissions

// Given an array of N integers arr[] where each element represents the max length of the jump that 
//can be made forward from that element. Find the minimum number of jumps to reach the end of the 
//array (starting from the first element). If an element is 0, then you cannot move through that element.

// Note: Return -1 if you can't reach the end of the array.


// Example 1:

// Input:
// N = 11 
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
// Output: 3 
// Explanation: 
// First jump from 1st element to 2nd 
// element with value 3. Now, from here 
// we jump to 5th element with value 9, 
// and from here we will jump to the last. 
// Example 2:

// Input :
// N = 6
// arr = {1, 4, 3, 2, 6, 7}
// Output: 2 
// Explanation: 
// First we jump from the 1st to 2nd element 
// and then jump to the last element.

// Your task:
// You don't need to read input or print anything. Your task is to complete function minJumps() which takes the array arr and it's size N as input parameters and returns the minimum number of jumps. If not possible return -1.


// Expected Time Complexity: O(N)
// Expected Space Complexity: O(1)


// Constraints:
// 1 ≤ N ≤ 107
// 0 ≤ arri ≤ 107


// const a = [1, 4, 3, 2, 6, 7]


// const MinimumNumberofJumps = (a) => {
//     let count = 0;
//     for(let i=0; i< a.length; i++) {
//         ++count
//         for(let j=i+1; j< a.length; j++){
//             const value = a[j]
//             const lengt =  a.length - a[j];
//             if(lengt <0){
//                 ++count 
//                 return
//             }else if(lengt >0){
//                 for(let k=j+value; k< a.length; k++){
//                     const value1 = a[k]
//                     const lengt1 =  a.length - a[j]
//                     if(lengt1 < 0){
//                         ++count 
//                         return
//                     }else if(lengt1 >0){
//                         for(let k=j+value1; k< a.length;k++){
//                             const lengt1 =  a.length - a[j]
//                             if(lengt1 < 0){
//                                 ++count 
//                                 return
//                             }
//                         }

//                     }else{
//                         ++count 
//                         return 
//                     }
//                 }
//             }else{
//                 ++count
//                 return 
//             }
//         }
//         return
//     }
//     console.log("ss",count)
// }
// const a = [1, 4, 3, 2, 6, 7]

const a = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]

const MinimumNumberofJumps = (s) => {
    let count = 0;
    for(let i = 0; i < s.length;i++){
        let arrlength =  s.length - s[i]
        ++count;
        for(let j = s[i]+1; j < s.length; j++){
            arrlength = s.length - s[j]
            if(s[j] >arrlength){
                ++count;
                return count;
            }else{
                ++count;
                for(let k= s[j]+1;k<s.length;k++){
                    arrlength = s.length - s[k]
                    if(s[k] >arrlength){
                        ++count;
                        return count;
                    }
                    return count;
                }
            } 
            return count
        }

        if(i === s.length -1){
            break;
        }
    }
    return count
}


//recusrsive method
// function minJumps(arr, n)
// {
 
//     // Base case: when source and
//     // destination are same
//     if (n == 1)
//         return 0;
 
//     // Traverse through all the points
//     // reachable from arr[l]
//     // Recursively, get the minimum number
//     // of jumps needed to reach arr[h] from
//     // these reachable points
//     let res = Number.MAX_VALUE;
//     for (let i = n - 2; i >= 0; i--) {
//         if (i + arr[i] >= n - 1) {
//             let sub_res = minJumps(arr, i + 1);
//             if (sub_res != Number.MAX_VALUE)
//                 res = Math.min(res, sub_res + 1);
//         }
//     }
 
//     return res;
// }

function minJumps(arr , n)
 
    {
        // jumps[n-1] will hold the
        var jumps = Array.from({length: n}, (_, i) => 0);;
        console.log(jumps);
        // result
        var i, j;
 
        // if first element is 0,
        if (n == 0 || arr[0] == 0)
            return Number.MAX_VALUE;
        // end cannot be reached
 
        jumps[0] = 0;
 
        // Find the minimum number of jumps to reach arr[i]
        // from arr[0], and assign this value to jumps[i]
        for (i = 1; i < n; i++) {
            jumps[i] = Number.MAX_VALUE;
            for (j = 0; j < i; j++) {
                if (i <= j + arr[j]
                    && jumps[j]
                           != Number.MAX_VALUE) {
                    jumps[i] = Math.min(jumps[i], jumps[j] + 1);
                    break;
                }
            }
        }
        return jumps[n - 1];
    }

console.log(minJumps(a, a.length))

// var MinimumNumberofJumps = function(nums) {
//     let max=0;
//     for(let i=0;i<nums.length-1;i++){
//         max=Math.max(max, nums[i]+i);
//         console.log(max);
//         if(max>=nums.length-1) return true;
//         if(i>=max)return false
       
//     }
//     return true;
// };
console.log(`Minimum number of jumps`,MinimumNumberofJumps(a))