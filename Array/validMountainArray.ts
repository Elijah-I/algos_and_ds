/**
 * Название: Valid Mountain Array
 * Условие: Дан массив целых чисел. Нужно определить, является ли он "горой":
 *         - Строго возрастает до некоторой точки (вершины),
 *         - Затем строго убывает после этой точки.
 *         При этом массив должен содержать как минимум три элемента,
 *         а вершина не может быть первой или последней.
 * Пример:
 *   Ввод: [0, 3, 2, 1]
 *   Вывод: true
 */

const arr = [0, 3, 2, 1];

const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 3) return false;

  let direction = 1;

  for (let i = 1; i < arr.length; i++) {
    const previous = arr[i - 1];
    const current = arr[i];

    if (current < previous && direction > 0 && i > 1) {
      direction = -1;
    }

    if (direction > 0) {
      if (current <= previous) return false;
    } else {
      if (current >= previous) return false;
    }
  }

  if (direction > 0) return false;

  return true;
};

const valid = validMountainArray(arr);

console.log(valid);
