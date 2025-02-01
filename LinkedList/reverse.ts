class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  let reversedList = null;

  while (head) {
    reversedList = new ListNode(head.val, reversedList);
    head = head.next;
  }

  return reversedList;
};

const l5 = new ListNode(5);
const l4 = new ListNode(4, l5);
const l3 = new ListNode(3, l4);
const l2 = new ListNode(2, l3);
const l1 = new ListNode(1, l2);

const reversedList = reverseList(l1);

console.log(reversedList);
