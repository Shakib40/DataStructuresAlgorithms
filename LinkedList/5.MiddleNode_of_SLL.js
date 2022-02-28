// function MiddleNode(head){
//     let curr = head
//     let lenght = 0;
//     while (curr != null){ 
//         curr = curr.next
//         lenght++
//     }
// }

function MiddleNode(head) {
    let slow_ptr = head
    let fast_ptr = head

    while ( fast_ptr != null && slow_ptr.next != null){
        fast_ptr = fast_ptr.next.next
        slow_ptr = fast_ptr.next
    }
    console.log( slow_ptr.data );
}