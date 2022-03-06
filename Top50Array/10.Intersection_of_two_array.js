function intersection(array1, array2){
    let set1 = new Set(array1);
    let set2 = new Set(array2);
    
    return [...set1].filter(n => set2.has(n))
      
}

var arr1 = [ 1, 2, 4, 5, 6 ];
var arr2 = [ 2, 3, 5, 7 ];

console.log( intersection(arr1, arr2));
