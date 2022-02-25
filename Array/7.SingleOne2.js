// Input: nums = [2,2,3,2]
// Output: 3


function SingleOne(nums) {
    let map = new Map();
    let val = 0;

    for( x of nums) {
       if( map.has(x) ) {
           map.set(x,  map.get(x) + 1);
       }else{
           map.set(x, 1)
       }
    }
    // return map;
    
    for( let [k,v] of map ) {
        if(map.get(k) != 3  ) {
            val = k
            break
        }
    }
    return val;
}

console.log(SingleOne([0,1,0,1,0,1,99]));