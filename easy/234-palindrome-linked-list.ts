function isPalindrome(head: ListNode | null): boolean {
	let array: number[] = [];
	while (head) {
		array.push(head.val);
		head = head.next;
	}

	const midPoint = Math.floor(array.length / 2);
	let isValid = true;
	for (let i = 0; i <= midPoint; i++) {
		if (array[i] !== array[array.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
