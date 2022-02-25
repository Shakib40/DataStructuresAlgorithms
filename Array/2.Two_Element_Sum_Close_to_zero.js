//INPUT: arr = [1,2,6,9,-5,-2]
// OUTPUT:-2 2

function SumCloseToZero(array){
  array.sort((a,b) => a -b)
  let left = 0;
  let right = array.length-1;
  let min_sum = 9999999999999;
  let sum = 0;
  let min_left = left
  let min_right = right


while (left < right) {
    sum = array[left] + array[right]

    if(  Math.abs(sum) < Math.abs(min_sum) ){
        min_sum = sum
        min_left = left
        min_right = right
    }
    if(sum < 0){
        left++

    }else{
        right--
    }
}

return array[min_left] + " " + array[min_right]

}

console.log(SumCloseToZero([1,2,6,9,-5,-2]));