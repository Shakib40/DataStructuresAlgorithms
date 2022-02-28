class LinkedList{
   constructor(){
       this.data = data;
       this.next = null;
   }
   insert(head, data){
     if(head == null){
        head = data
        this.head = null;
     }  
   }

   print( head ){
      if(head == null){
          return
      }
      let curr = head;
      while(curr != null){
          console.log( curr.data );
          curr = curr.next
      }
   }

}
