/**
 * Название: Sum of Nested Objects
 * Условие: Дан массив объектов, где поле `value` может содержать число, строку или вложенный массив таких же объектов.
 *         Нужно рекурсивно посчитать сумму всех числовых значений, приводя строки к числам при возможности.
 * Пример:
 *   Ввод: [
 *         { value: [{ value: '2' }, { value: [{ value: 3 }] }] },
 *         { value: 1 }
 *       ]
 *   Вывод: 6
 */

type NestedItem = {
  value: number | string | NestedItem[];
};

const nestedItems: NestedItem[] = [
  {
    value: [
      {
        value: '2',
      },
      {
        value: [{ value: 3 }],
      },
    ],
  },
  {
    value: 1,
  },
];

const recursiveSum = (nestedItems: NestedItem[]) => {
  let sum = 0;

  for (const key in nestedItems) {
    const value = nestedItems[key].value;

    if (typeof value === 'object') {
      sum += recursiveSum(value);
    } else {
      sum += Number(value);
    }
  }

  return sum;
};

const sum = recursiveSum(nestedItems);
console.log(sum);
