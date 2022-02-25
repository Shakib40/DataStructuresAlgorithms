//INPUT : [7,2,4,6,4,2,6]
// OUTPUT : 7

var singleNumber = function(nums) {
    let map = new Map();
    let stack = [];

    for(x of nums) {
       if( map.has(x) ){
           map.set(x, map.get(x) + 1)
       }else{
           map.set(x, 1);
       }
    }
    // return map

    for( let [k , v ] of map ){
        if( map.get(k) == 1 ){
            stack.push(k);
        }
    }
    return stack

};

console.log( singleNumber([1,2,1,3,2,5] ));