/**
 * Название: Check If N Has Two Sum Equals to Target in Array
 * Условие: Дан массив целых чисел arr. Нужно проверить, существует ли в массиве хотя бы одна пара элементов (i, j),
 *         таких что arr[i] == 2 * arr[j] или arr[j] == 2 * arr[i], при условии i != j.
 * Пример:
 *   Ввод: arr = [10, 2, 5, 3]
 *   Вывод: true (потому что 10 = 2 * 5)
 */

const arr = [10, 2, 5, 3];

const checkIfExist = (arr: number[]): boolean => {
  const hashTable: Record<number, boolean> = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (hashTable[item * 2]) {
      return true;
    }

    if (item % 2 === 0 && hashTable[item / 2]) {
      return true;
    }

    hashTable[item] = true;
  }

  return false;
};

const isExists = checkIfExist(arr);

console.log(isExists);
