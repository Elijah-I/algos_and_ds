/**
 * Название: Replace Elements with Greatest to Right
 * Условие: Дан массив целых чисел. Нужно заменить каждый элемент на максимальный среди элементов справа от него.
 *         Последний элемент заменяется на -1.
 * Пример:
 *   Ввод: [17, 18, 5, 4, 6, 1]
 *   Вывод: [18, 6, 6, 6, 1, -1]
 */

const arr = [17, 18, 5, 4, 6, 1];

const replaceElements = (arr: number[]): number[] => {
  for (let i = arr.length; i > 0; i--) {
    let max = -1;
    const index = arr.length - i;

    for (let j = arr.length; j > index; j--) {
      if (arr[j] > max) max = arr[j];
    }

    arr[index] = max;
  }

  return arr;
};

const replaced = replaceElements(arr);

console.log(replaced);
