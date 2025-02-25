class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const middleNode = (head: ListNode | null): ListNode | null => {
  let middleNode = head;
  let endNode = head;

  while (endNode && endNode.next) {
    middleNode = middleNode.next;
    endNode = endNode.next.next;
  }

  return middleNode;
};

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const middle = middleNode(node1);

console.log(middle);
