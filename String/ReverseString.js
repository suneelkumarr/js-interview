//https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/879/


// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


const s = ["h","e","l","l","o"]

const reverseString = (s) =>{
    // console.log("reverseString",s)
    //Method 1
    // const Data = s.reverse()
    // console.log("reverseString",Data)

    //Method 2
    // const DataArray = []
    // for(let i=s.length; i--;){
    //     DataArray.push(s[i])
    // }
    // return DataArray


    let l = 0, r = s.length-1;
    
    do { [ s[l], s[r] ] = [ s[r], s[l] ] } while(++l < --r);

    return s
}

console.log(reverseString(s));