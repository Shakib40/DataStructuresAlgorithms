function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
}
console.log( mergeSortedArrays([0,3,4,31], [3,4,6,30]) );


// Merging two sorted subarrays properly
function merge(arr1, arr2) {
  // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2     
  let res = [],
      i = 0,
      j = 0;
  
  // Loop until either arr1 or arr2 becomes empty
  while (i < arr1.length && j < arr2.length) {
      // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i         
      if (arr1[i] < arr2[j]) {
          res.push(arr1[i]);
          i++;
      } else {
          res.push(arr2[j]);
          j++;
      }
  }

  // Add the rest of the remining subarray, to our new array
  while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
  }
  while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
  }
  return res;
}

// Recursive merge sort
function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;

  // Splitting into two halves
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // merging the two sorted halves
  return merge(left, right);
}