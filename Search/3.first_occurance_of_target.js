function firstOccuranceOfTarget( array , target){
  let low = 0;
  let high = array.length -1
  let res = -1;

  while(low <= high){
     
    let mid = low + Math.floor( (high - low)/2 )
    if(array[mid] == target){
       res = mid
    }
    if(array[mid] < target){
        low = mid + 1;
    }else{
        high = mid - 1;
    }
  }
  return res
}


let array = [1,1,2,2,2,2,2,2,2,5,6,6,6,]
let target = 2

console.log( firstOccuranceOfTarget( array , target) );