function hasCycle(head: ListNode | null): boolean {
	let slow = head,
		fast = head;
	// loop through as long as the linked list continues
	while (fast && fast?.next) {
		// move the pointers ahead
		slow = slow?.next ?? null;
		fast = fast?.next?.next ?? null;

		if (slow === fast) {
			return true;
		}
	}
	return false;
}
