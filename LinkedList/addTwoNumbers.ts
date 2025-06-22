/**
 * Название: Add Two Numbers
 * Условие: Даны два связанных списка, представляющих неотрицательные целые числа.
 *         Цифры хранятся в обратном порядке, и каждый узел содержит одну цифру.
 *         Нужно сложить два таких числа и вернуть результат как связанный список.
 * Пример:
 *   Ввод: l1 = [2,4,3], l2 = [5,6,4]
 *   Вывод: [7,0,8]
 *   Объяснение: 342 + 465 = 807 → представлено как [7,0,8]
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode => {
  if (!l1 || !l2) {
    if (l1) return l1;
    if (l2) return l2;
    return new ListNode(0);
  }

  let carry = 0;
  let valSum = 0;

  const entryNode = l1;

  while (l1.next || l2.next) {
    valSum = l1.val + l2.val + carry;
    carry = Number(valSum >= 10);

    l1.val = valSum - carry * 10;

    if (!l1.next) l1.next = new ListNode(0);
    if (!l2.next) l2.next = new ListNode(0);

    l1 = l1.next;
    l2 = l2.next;
  }

  valSum = l1.val + l2.val + carry;
  carry = Number(valSum >= 10);

  l1.val = valSum - carry * 10;
  if (carry) {
    l1.next = new ListNode(carry);
  }

  return entryNode;
};

// const list21 = new ListNode(1);
// const list20 = new ListNode(0, list21);
// const list19 = new ListNode(0, list20);
// const list18 = new ListNode(0, list19);
// const list17 = new ListNode(0, list18);
// const list16 = new ListNode(0, list17);
// const list15 = new ListNode(0, list16);
// const list14 = new ListNode(0, list15);
// const list13 = new ListNode(0, list14);
// const list12 = new ListNode(0, list13);
// const list11 = new ListNode(0, list12);
// const list10 = new ListNode(0, list11);
// const list09 = new ListNode(0, list10);
// const list08 = new ListNode(0, list09);
// const list07 = new ListNode(0, list08);
// const list06 = new ListNode(0, list07);
// const list05 = new ListNode(0, list06);
// const list04 = new ListNode(0, list05);
// const list03 = new ListNode(0, list04);
// const list02 = new ListNode(0, list03);
// const list01 = new ListNode(0, list02);
// const list00 = new ListNode(1, list01);

const list02 = new ListNode(2);
const list01 = new ListNode(4, list02);
const list00 = new ListNode(3, list01);

const list_12 = new ListNode(4);
const list_11 = new ListNode(6, list_12);
const list_10 = new ListNode(5, list_11);

const sum = addTwoNumbers(list00, list_10);

console.log(sum);
