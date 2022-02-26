// INPUT : [-2,-3,4,-1,-2,1,5,-3]
// OUTPUT :


function subarraySum(array){
    let sum = Number.NEGATIVE_INFINITY
    let curr_sum = 0;

    for(let i = 0; i < array.length; i++) {
        curr_sum = curr_sum + array[i]

        if(curr_sum > sum) {
            sum = curr_sum
        }
        if(curr_sum < sum) {
            curr_sum = 0
        }
    }
    return sum
}

console.log( subarraySum( [-2,-3,4,-1,-2,1,5,-3]) );

