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
