/**
 * Название: Sum of All Node Values in a Tree
 * Условие: Дано дерево, где каждый узел содержит значение `v` и массив дочерних узлов `c`.
 *         Нужно рекурсивно и итеративно посчитать сумму всех значений во всех узлах дерева.
 * Пример:
 *   Ввод: [
 *         { v: 5, c: [...] },
 *         { v: 5, c: [...] }
 *       ]
 *   Вывод: сумма всех `v` в дереве (например, 5 + 10 + 11 + 7 + 5 + 1 + 5 + 10 + 15 = 69)
 */

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

const getTreeSumRecursive = (tree) => {
  let total = 0;

  for (let key in tree) {
    const node = tree[key];

    total += node.v;

    if (node.c) {
      total += getTreeSumRecursive(node.c);
    }
  }

  return total;
};

const getTreeSumIterative = (tree) => {
  let total = 0;
  const stack = [tree];

  while (stack.length) {
    stack.pop().forEach((node) => {
      total += node.v;

      if (node.c) {
        stack.push(node.c);
      }
    });
  }

  return total;
};

const sum = getTreeSumIterative(tree);

console.log(sum);
