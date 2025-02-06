const numbers = [1, 15, 6, 3];

const differenceOfSum = (numbers: number[]): number => {
  let diff = 0;

  for (const key in numbers) {
    if (numbers[key] > 9) {
      diff += Math.abs(
        numbers[key] -
          Array.from(String(numbers[key])).reduce(
            (a, b) => Number(a) + Number(b),
            0
          )
      );
    }
  }

  return diff;
};

const diff = differenceOfSum(numbers);

console.log(diff);
