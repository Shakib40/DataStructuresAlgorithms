function squareRoot(number ){
   let low = 0;
   let high = number

   while(low <= high){
       let mid = low + Math.floor( (high - low)/2)
       
       if( mid * mid == number ){
           return mid
       }
       if(mid * mid > number){
           high = mid
       }else{
           low = mid
       }
   }
   return -1

}

console.log( squareRoot(625) );
console.log( squareRoot(25) );
console.log( squareRoot(144) );