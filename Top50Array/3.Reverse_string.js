function  reverseWord(str){
    let ss = ''
    
    for(let  i = 0  ; i < str.length ; i++){
        ss = str[i] + ss 
    }
    return ss
}