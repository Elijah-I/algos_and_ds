/**
 * Название: Reverse Queue Elements
 * Условие: Дан массив, представляющий очередь. Нужно изменить порядок элементов на обратный.
 * Пример:
 *   Ввод: [10, 20, 40]
 *   Вывод: [40, 20, 10]
 */

const queue = [10, 20, 40];

const reverseQueue = (queue: number[]) => {
  let pointerStart = 0;
  let pointerEnd = queue.length - 1;

  while (pointerStart < pointerEnd) {
    [queue[pointerStart], queue[pointerEnd]] = [queue[pointerEnd], queue[pointerStart]];

    pointerStart++;
    pointerEnd--;
  }

  return queue;
};

const reversed = reverseQueue(queue);
console.log(reversed);
