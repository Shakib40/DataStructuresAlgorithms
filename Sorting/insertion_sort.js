function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
          
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}


console.log( insertionSort([5,3,1,3,2,7,8,9]) );

console.log( insertionSort([5,3,1,-3,-2,7,8,9]) );