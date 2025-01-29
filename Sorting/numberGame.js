/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberGame = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }

    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];

    if (i % 2 === 1) {
      [numbers[i], numbers[i - 1]] = [numbers[i - 1], numbers[i]];
    }
  }

  return numbers;
};

const number = numberGame([5, 3, 6, 1]);

console.log(number);
