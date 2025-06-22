/**
 * Название: Merge k Sorted Lists
 * Условие: Дан массив связных списков, каждый из которых представляет отсортированный по возрастанию список.
 *         Нужно объединить все эти списки в один отсортированный связный список.
 * Пример:
 *   Ввод: [
 *         new ListNode(1, new ListNode(4, new ListNode(5))),
 *         new ListNode(0, new ListNode(2))
 *       ]
 *   Вывод: 0 -> 1 -> 2 -> 4 -> 5
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeKLists = (lists) => {
  if (!lists.length) {
    return null;
  }

  const array = [];
  lists.forEach((list) => {
    let item = list;
    let nextItem = list && list.next;

    while (item) {
      array.push(item.val);

      item = nextItem;
      nextItem = item && item.next;
    }
  });

  let mergedList = null;
  array
    .sort((a, b) => b - a)
    .forEach((value) => {
      if (!mergedList) {
        mergedList = new ListNode(value);
      } else {
        mergedList = new ListNode(value, mergedList);
      }
    });

  return mergedList;
};

const list14 = new ListNode(5);
const list13 = new ListNode(4, list14);
const list1 = new ListNode(1, list13);

const list26 = new ListNode(2);
const list2 = new ListNode(0, list26);

let mergedList = mergeKLists([list1, list2]);
let mergedListNext = mergedList && mergedList.next;

const res = [];

while (mergedList) {
  res.push(mergedList.val);
  mergedList = mergedListNext;
  mergedListNext = mergedList && mergedList.next;
}

console.log(res.join(' -> '));
