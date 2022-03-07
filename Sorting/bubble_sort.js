function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // ES6 way of swapping array elements
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

console.log( bubbleSort([5,3,1,3,2,7,8,9]) );

console.log( bubbleSort([5,3,1,-3,-2,7,8,9]) );