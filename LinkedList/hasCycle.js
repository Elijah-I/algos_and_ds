/**
 * Название: Linked List Cycle Detection
 * Условие: Дан связный список, нужно определить, содержит ли он цикл.
 *         Цикл — это ситуация, когда какой-то узел ссылается на один из предыдущих узлов, создавая "петлю".
 * Пример:
 *   Ввод: head = [5, 2, 0, -4], цикл от -4 к 2
 *   Вывод: true
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (headNode) => {
  if (!headNode) {
    return false;
  }

  let nextNode = headNode.next;

  while (nextNode) {
    if (nextNode.passed) {
      return true;
    }

    nextNode.passed = true;
    nextNode = nextNode.next;
  }

  return false;
};

const head0 = new ListNode(5);
const head1 = new ListNode(2);
const head2 = new ListNode(0);
const head3 = new ListNode(-4);

head0.next = head1;
head1.next = head2;
head2.next = head3;
head3.next = head1;

const isCycled = hasCycle(head0);

console.log(isCycled);
