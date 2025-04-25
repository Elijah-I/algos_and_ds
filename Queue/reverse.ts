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
