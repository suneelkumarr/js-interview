//https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


const  s = "race a car"

const validPalindrome = (s) => {

    if(s===" "){
        return true
    }
    let newString =  s.split(",").join(",").toString().toLowerCase();
    newString = newString.replace(/[\W\_]/g, '');
    const DataArray = []
    for(i=0; i<newString.length; i++) {
        if(newString[i] === ' '){
            delete newString[i]
        }else if(newString[i] === ','){
            delete newString[i]
        }else if(newString[i] === ':'){
            delete newString[i]
        }else{
            DataArray.push(newString[i])
        }
    }
    const news1 = DataArray.join("");
    const  news = DataArray.reverse().join("");

    return news1===news
}

console.log(validPalindrome(s))