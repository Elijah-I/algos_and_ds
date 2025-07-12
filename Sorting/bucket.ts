const arr = [2, 7, 5, 6, 8, 3, 4, 1, 9];

/**
 * Сортирует массив методом сортировки по корзинам (Bucket Sort).
 *
 * @algorithm
 * 1. Находим минимальное и максимальное значения массива.
 * 2. Создаём несколько корзин (bucket'ов) и распределяем элементы по ним.
 * 3. Сортируем каждую корзину отдельно (используем встроенную sort).
 * 4. Объединяем все корзины в итоговый отсортированный массив.
 *
 * @complexity O(n + k), где k — количество корзин, но в худшем случае O(n^2)
 * @param {number[]} arr - исходный массив чисел
 * @returns {number[]} отсортированный массив
 */
const bucketSort = (array: typeof arr): typeof arr => {
  const bucket: number[][] = [];
  const bucketCount = 3;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const numbersInRange = max - min + 1;
  const bucketStepSize = numbersInRange / bucketCount;

  for (let i = 0; i < array.length; i++) {
    const itemValue = array[i];
    const itemValueFromZero = itemValue - min;
    const bucketIndex = Math.floor(itemValueFromZero / bucketStepSize);

    bucket[bucketIndex] ??= [];
    bucket[bucketIndex].push(itemValue);
  }

  for (let i = 0; i < bucket.length; i++) {
    bucket[i].sort();
  }

  return bucket.flat();
};

const sorted = bucketSort(arr);

console.log(sorted);
