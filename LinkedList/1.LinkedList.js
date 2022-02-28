var head;
class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
}
// add a new node at head
function push(new_data) {
	var new_node = new Node(new_data);
	new_node.next = head;
	head = new_node;
}

// add new node after any element
function insertAfter(prev_node , new_data) {
	if (prev_node == null) {
	  console.log("The given previous node cannot be null");	
	  return;
    }
	var new_node = new Node(new_data);
	new_node.next = prev_node.next;
	prev_node.next = new_node;
}

//add a new node to the last od linked list
function append(new_data) {
	var new_node = new Node(new_data);

	if (head == null) {
		head = new Node(new_data);
		return;
	}
	new_node.next = null;
	var last = head;
	while (last.next != null)
		last = last.next;
	last.next = new_node;
	return;
}

// function reverseList(){
//     if(head == null){
//         return 
//     }
//     let prev = null;
//     let curr = head

//     while(curr != null){
//         next = curr
//     }
// }

function MiddleNode() {
    let slow_ptr = head
    let fast_ptr = head

    while ( fast_ptr != null && fast_ptr.next != null){
        fast_ptr = fast_ptr.next.next
        slow_ptr = slow_ptr.next
    }
    console.log( slow_ptr.data );
}

// Print linked list in reverse order
// function reversePrint(){
//     let curr = head
//     if(curr == null){
//         return 
//     }else{
//         reversePrint(curr.next)
//         console.log(curr.data);
//     }
// }


function KthNode_From_End_of_SLL(){

}


// push(1);
// push(2);
// push(3);

append(1)
append(2)
append(4)
append(5)
append(6)
append(7)
append(8)
append(9)
append(10)


// display data
function printList() {
	let str = '';
	var tnode = head;
	while (tnode != null) {
		str += tnode.data + ' ';
		tnode = tnode.next;
	}
	console.log(str);
}

printList()
MiddleNode()
// reversePrint()
