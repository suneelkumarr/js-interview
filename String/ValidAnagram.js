//https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/882/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

 const s = "rat", t = "car"
const validAnagrams = (s, t) =>{
        let first = s.split(",").sort().join(",").toString()
        let second = t.split(",").sort().join(",").toString()
        if(first.length === second.length){
            let firstArray = []
            let secondArray = []
            for(i=0; i<first.length; i++){
                firstArray.push(first[i])
            }
            for(i=0; i<second.length; i++){
                secondArray.push(second[i])
            }
            firstArray =  firstArray.sort().join("")
            secondArray =  secondArray.sort().join("")
            if(firstArray.toString() === secondArray.toString()){
                return true
            }else{
                return false
            }
        }else{ 
            return false;
        }
}

console.log(validAnagrams(s,t));