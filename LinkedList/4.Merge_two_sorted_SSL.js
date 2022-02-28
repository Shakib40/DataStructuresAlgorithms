function MergeSorted(head1 , head2) {

    if(head1 == null) return B

    if(head2 == null) return A

    if(head1.data < head2.data){
        head1.next = MergeSorted( head1.next , head2)
        return head1
    }else{
        head2.next = MergeSorted( head1 , head2.next)
        return head2
    }
    
}