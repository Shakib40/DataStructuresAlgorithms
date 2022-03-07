// working

// function factorial(index) {
//     const D = [1];

//     for (let i = 1; i <= index; i++) {
//         D[i] = D[i - 1] * i;
//     }
//     return D;
// }

function factorial(index) {
    let sum = 1;
    for (let i = 1; i <= index; i++) {
       sum = sum * i
    }
    return sum;
}
console.log( factorial(6));


