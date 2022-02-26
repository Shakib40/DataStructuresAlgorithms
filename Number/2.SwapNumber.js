// function SwapNumber(a, b) {
   
//     a = a + b;
//     b = a -b;
//     a = a - b;

//     return [a, b];
// }


// function SwapNumber(a, b) {
   
//     let temp = a
//     a =b
//     b = temp

//     return [a,b];
// }


function SwapNumber(a, b) {
   
    a = a ^ b // a = 20 ^ 30

    b = a ^ b // b =  (20 ^ 30) ^ 30  // 20
    a = a ^ b // a = (20 ^ 30)  ^ ( (20 ^ 30) ^ 30 )  // 30 

    return [a,b]
}




console.log(  SwapNumber( 20 , 30) );