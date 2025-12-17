function reverseList(head: ListNode | null): ListNode | null {
	// init a var to track the prev
	let prev = null;
	// loop through the list
	while (head) {
		// store the next node in a var
		let next = head.next;
		// set the next in the head to the prev
		head.next = prev;
		// set the prev as the head
		prev = head;
		// set the head as next
		head = next;
	}
	return prev;
}
