const data = [1, [2, [3, 4], 5], 6];

const arraySum = (arr: typeof data) => {
  let sum = 0;
  const stack = [...arr];

  while (stack.length) {
    const current = stack.pop();

    if (typeof current === 'number') sum += current;
    else stack.push(...current);
  }

  return sum;
};

const result = arraySum(data);

console.log(result);
