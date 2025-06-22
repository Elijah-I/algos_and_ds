/**
 * Название: Heapify Array (Max Heap)
 * Условие: Реализовать функцию, которая преобразует массив в max-кучу (так, чтобы каждый родитель был больше своих потомков).
 *         Операция должна выполняться in-place.
 * Пример:
 *   Ввод: [5, 3, 8, 4, 1, 2]
 *   Вывод: [8, 5, 2, 4, 1, 3] (или аналогичный корректный вариант кучи)
 */

const array = [5, 3, 8, 4, 1, 2];

const heapify = (array: number[]) => {
  const isValidParent = (index: number) => {
    const leftChildValue = array[index * 2 + 1];
    const rightChildValue = array[index * 2 + 2];

    if (!leftChildValue) {
      return true;
    }

    if (!rightChildValue) {
      return leftChildValue < array[index];
    }

    return leftChildValue < array[index] && rightChildValue < array[index];
  };

  for (let i = 0; i < array.length; i++) {
    while (!isValidParent(i)) {
      let swapIndex = i;
      const leftChildIndex = i * 2 + 1;
      const rightChildIndex = i * 2 + 2;
      const leftChildValue = array[leftChildIndex];
      const rightChildValue = array[rightChildIndex];

      if (!rightChildValue) {
        swapIndex = leftChildIndex;
      }

      swapIndex = leftChildValue > rightChildValue ? leftChildIndex : rightChildIndex;

      [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
    }
  }

  return array;
};

const heapified = heapify(array);

console.log(heapified);
