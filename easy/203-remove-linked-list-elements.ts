function removeElements(head: ListNode | null, val: number): ListNode | null {
	let temp = new ListNode(0);
	let current = temp;
	temp.next = head;
	while (current.next !== null) {
		if (current.next.val === val) {
			current.next = current.next.next;
		} else {
			current = current.next;
		}
	}
	return temp.next;
}
