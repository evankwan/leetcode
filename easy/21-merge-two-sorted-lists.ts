function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let newList: ListNode = new ListNode(0);
  let op = newList;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      op.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      op.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    op = op.next;
  }
  op.next = list1 || list2;

  return newList.next;
}
