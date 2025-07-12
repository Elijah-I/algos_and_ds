const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Выполняет тернарный поиск элемента в отсортированном массиве.
 *
 * @algorithm
 ** Устанавливаем два указателя: левый и правый конец массива.
 ** Пока левый указатель не превысил правый:
 **   - Находим две трети: mid1 и mid2.
 **   - Если элемент в mid1 равен искомому — возвращаем mid1.
 **   - Если элемент в mid2 равен искомому — возвращаем mid2.
 **   - Если искомое меньше элемента в mid1 — ищем в левой трети.
 **   - Если искомое больше элемента в mid2 — ищем в правой трети.
 **   - Иначе ищем в средней трети.
 ** Если не найден — возвращаем -1.
 *
 * @complexity O(log_3 n) — логарифмическая сложность по основанию 3
 * @param {number[]} array - отсортированный массив чисел
 * @param {number} find - искомое значение
 * @returns {number} индекс найденного элемента или -1, если не найден
 */
const ternarySearch = (array: typeof arr, find: (typeof arr)[number]): number => {
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  while (pointerLeft <= pointerRight) {
    const ternary = Math.floor((pointerRight - pointerLeft) / 3);
    const mid1 = pointerLeft + ternary;
    const mid2 = pointerRight - ternary;

    if (array[mid1] === find) return mid1;
    if (array[mid2] === find) return mid2;

    if (find < array[mid1]) pointerRight = mid1 - 1;
    else if (find > array[mid2]) pointerLeft = mid2 + 1;
    else {
      pointerLeft = mid1 + 1;
      pointerRight = mid2 - 1;
    }
  }

  return -1;
};

const findFirst = ternarySearch(arr, 1);
console.log(findFirst);

const findLast = ternarySearch(arr, 10);
console.log(findLast);

const findRandom = ternarySearch(arr, 2);
console.log(findRandom);

export {};
