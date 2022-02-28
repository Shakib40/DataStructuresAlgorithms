function maxPlatform (arr , dep , n){
   
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    
    pf_count = 1 , res = 1;
    i = 1 , j = 0 ;
 
    while( i < n && j < n){
        if( arr[i] <= dep[j] ){
            pf_count++;
            i++;
        }else if( arr[i] > dep[j] ){
            pf_count--;
            j++;
        }
        if(pf_count > res){
            res = pf_count
        }
    }
    return res;
 }
 
 let arrival = [900 , 940 , 950 , 1100 , 1500 , 1800]
 // let departure = [910 , 1200 , 1120 , 1130 , 1900 , 2000]
 let departure = [2000 , 2000 , 2000 , 2000 , 1900 , 2000]
 
 console.log(  maxPlatform (arrival , departure , 5) );