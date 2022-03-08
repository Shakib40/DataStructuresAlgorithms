function largestSubarray(String , k){ // k unique characters
   
    let map = new Map()
    let j = 0 , i = 0 ; res = -1

    while( j < String.length){
        map.set( String.charAt( j ),  map.get( String.charAt(j),0 ) + 1 )

        if(map.size == k){
           res = Math.max(  j-i+1 , res )
        }else if(map.size > k){

            while(map.size > k){
                map.set( String.charAt(i) , map.get( String.charAt(i) -1 ) )
                if(map.get( String.charAt(i)) == 0){
                    map.remove( String.charAt(i))
                }
                i++
            }
        }
        j++ 
    }
    return res
}

let str = 'abcedfaacfaa'
let k = 3
console.log( largestSubarray(str , k) );
