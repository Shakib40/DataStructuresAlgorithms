// INPUT : [1 , 2 , 3 , 4 , 5 , 6 , 7] and d = 2
// OUTPUT :
// d=1   [ 2 , 3 , 4 , 5 , 6 , 7 , 1]
// d =2  [ 3 , 4 , 5 , 6 , 7 , 1 , 2]

function reverse (arr , left, right) {

    while (left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left = left + 1
        right = right - 1
    }
    return arr
}

// console.log(reverse( [1, 2, 3, 4, 5, 6 , 7] , 0 , 6) );

function RotateArray(arr , d) {
    reverse (arr , 0 , d-1)
    reverse (arr , d , arr.length-1)
    reverse (arr , 0 , arr.length-1)
    return arr
}

console.log( RotateArray( [1, 2, 3, 4, 5, 6 , 7] , 2 ) );