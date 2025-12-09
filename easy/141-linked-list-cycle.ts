class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

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
