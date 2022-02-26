
let matrix = [
    [10,20,30,40],
    [15,25,35,45],
    [27,29,37,48],
    [32,33,39,50]
]
let target = 32
let N = 4

function matrixSearch(matrix ,N, target){
    let i = 0;
    let j = N-1;

    while ( 0 <= i && 0 <= j ){
        if(matrix[i][j] == target){
        return [matrix[i][j], i , j]    
        } 
        if( matrix[i][j] > target){
           j--;
        }else{
            i++;
        }
    }
    return -1;
}

console.log(matrixSearch(matrix , N, target) );


