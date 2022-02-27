function firstOccuranceOfTarget( array , target){
    let low = 0;
    let high = array.length -1
    let res = -1;
  
    while(low <= high){
       
      let mid = low + Math.floor( (high - low)/2 )
      if(array[mid] == target){
         res = mid
         high = mid - 1
      }
       if(array[mid] < target){
          low = mid + 1;
      }else{
         high = mid - 1;
      }
    }
    return res
}

function lastOccuranceOfTarget( array , target){
    let low = 0;
    let high = array.length -1
    let res = -1;
  
    while(low <= high){
       
      let mid = low + Math.floor( (high - low)/2 )
      if(array[mid] == target){
         res = mid
         low = mid + 1
      }
      else if(array[mid] < target){
          low = mid + 1;
      }else{
         high = mid - 1;
      }
    }
    return res
}

function frequencyOfTarget(){
    let array = [1,1,2,2,2,2,2,2,2,5,6,6,6,]
    let target = 7
    let last = lastOccuranceOfTarget( array , target)
    let first = firstOccuranceOfTarget( array , target)
    
    if( first == -1 && last == -1){
        return -1
    }else{
        return last - first + 1
    }
}

console.log( frequencyOfTarget() );