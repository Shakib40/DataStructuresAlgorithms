var removeMaximum = function (head) {
    if(head == null || head.next == null) {
       return null;
    }
     
     let prevLargest, largest,curr, prev; 
     curr = largest = curr;
     prevLargest = null;
     prev = head;
     head = head.next;
     
     while(head != null) {
       if(head.data > largest.data) {
         prevLargest = prev;
         largest = head;
       }
       
       prev = head;
       head = head.next;
     }
     
     if(head == largest) {
       head = head.next;
     } else {
       prevLargest.next = largest.next;
     }
     
     return head;
 };
 