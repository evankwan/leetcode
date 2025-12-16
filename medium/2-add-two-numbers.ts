function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	const l3 = new ListNode();
	const num = addNewNumbers(l1, l2, l3, 0);
	return l3.next;
}

const addNewNumbers = (
	l1: ListNode | null,
	l2: ListNode | null,
	l3: ListNode | null,
	carry: number
) => {
	if (!l1 && !l2 && !carry) {
		return;
	}
	const val = (l1?.val || 0) + (l2?.val || 0) + carry;
	carry = val > 9 ? Math.floor(val / 10) : 0;
	l3.next = new ListNode(val % 10);
	addNewNumbers(l1?.next, l2?.next, l3?.next, carry);
};
