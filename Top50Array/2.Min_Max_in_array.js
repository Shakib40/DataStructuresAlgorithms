function   getMinMax(arr,n){

    let  max = Number.NEGATIVE_INFINITY
    let min = Number.POSITIVE_INFINITY
    
    for( let v of arr ){
        if( max < v ){
            max = v
        }
        if(min > v ){
            min = v
        }
    }
    return [min , max]
}