// INPUT : 15
// OUTPUT : 1111


function DecimalToBinary(N){
    let str = '';
    let dividend = 0
    while ( 0 < N ){
        dividend = Math.floor(N /2);
        str =   N % 2 + str ;
        N = dividend
    }
    return str
}

console.log(DecimalToBinary(37));
