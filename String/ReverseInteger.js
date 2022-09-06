//https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/880/

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1


const x = 0;
const reverseInteger = (x) =>{
    var minn = - (1 << 30) * 2;
    var maxn = (1 << 30) * 2 - 1;
  const reminder = x%10
  let ans
   if(x>0){
      if(reminder === 0){
          const data = x/10
          const newdata = data.toString();
          const newString = []
          for(i=newdata.length; i--; ){
              newString.push(newdata[i])
          }
          const DataValue = newString.join("")
          ans = parseInt(DataValue)
      }else{
          const data = x.toString();
          const newString = []
          for(i=data.length; i--; ){
              newString.push(data[i])
          }
          const DataValue = newString.join("")
          ans = parseInt(DataValue)
      }
  }else if(x<0){
      const data  = -(x)
      const reminder = data%10
      if(reminder === 0){
          const data = x/10
          const newdata = data.toString();
          const newString = []
          for(i=newdata.length; i--; ){
              newString.push(newdata[i])
          }
          const DataValue = newString.join("")
          const finalvalue = -parseInt(DataValue)
          // console.log(-finalvalue)
          ans = finalvalue;
      }else{
          const datas = data.toString()
          const newString = []
          for(i=datas.length; i--; ){
              newString.push(datas[i])
          }
          const DataValue = newString.join("")
          const finalvalue = -parseInt(DataValue)
          ans = finalvalue;
      }
  }else if(x===0){
      ans = 0
  }
  
  if(ans < minn || ans > maxn){
      ans = 0
  }
  
  return ans
}

console.log(reverseInteger(x));