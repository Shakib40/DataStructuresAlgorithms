// working

function slidingWindow(){
   let array = [11, 10, 25, 6, 2, 12 ,333, 6, 8, 22];
  
   const stack = [];
   let sum = array[0] + array[1] + array[2];
   let max = sum;
   stack.push(max);

   for(let i = 2; i < array.length -1; i++){
       sum  = array[i-1] + array[i] + array[i+1];
            
       if(max < sum){
           stack.push(sum);
           max = sum;
       }
   }
   console.log(stack[stack.length - 1]);
}

slidingWindow();



