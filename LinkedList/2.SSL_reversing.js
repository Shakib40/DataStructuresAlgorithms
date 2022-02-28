function reverse(head){
    if(head == null){
        return 
    }else{
        reverse(head.next)
        console.log(head.data);
    }
}

