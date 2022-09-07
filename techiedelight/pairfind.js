//https://www.techiedelight.com/find-pair-with-given-sum-array/
// Input:
 
// nums = [8, 7, 2, 5, 3, 1]
// target = 10
 
// Output:
 
// Pair found (8, 2)
// or
// Pair found (7, 3)
 
 
// Input:
 
// nums = [5, 2, 6, 8, 1, 9]
// target = 12
 
// Output: Pair not found


const nums = [8, 7, 2, 5, 3, 1]
const target = 10

const findpair = (nums, target) =>{
const pair= []
  for(i=0; i<nums.length; i++){
  for(j=0; j<nums.length; j++){
  if(nums[i] !== nums[j]){
    if((nums[i] + nums[j]) === target){
    pair.push([nums[i],nums[j]])
    }
    }
  }
  }
  
  if(pair.length !==0){
  for(i=0;i<pair.length; i++){
  	a=pair.map((data)=>{
	data.sort((a,b)=>b-a)
  return data
})
let b=Array.from(new Set(a.map(JSON.stringify)), JSON.parse)
return b
  }
  return pair
  }else{
    return "pair not found"
  }
}

console.log(findpair(nums, target)) 
