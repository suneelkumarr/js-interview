//https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/881/

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2



// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

const s = "loveleetcode"

const firstnonRepet = (s) => {
    const dataString =  s.split(",").join(",").toString().toLowerCase();
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
    if(track[key] === null){
      delete track[key];
    }
  }
  return Object.values(track).length === 0 ? -1 : Object.values(track)[0];
}

console.log(firstnonRepet(s))