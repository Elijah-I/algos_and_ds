const numbers1 = [-12, 0, 0, 0, 0, 0];
const m = 1;
const numbers2 = [-49, 0, 0, 0, 48];
const n = 5;

const mergeSortedArray = (
  numbers1: number[],
  m: number,
  numbers2: number[],
  n: number,
): number[] => {
  let pointer1 = 0;
  let pointer2 = 0;
  let total = [];

  while (true) {
    if (pointer1 >= m && pointer2 >= n) {
      break;
    }

    if (pointer1 >= m || numbers2[pointer2] <= numbers1[pointer1]) {
      total.push(numbers2[pointer2]);
      pointer2++;
      continue;
    }

    if (pointer2 >= n || numbers1[pointer1] <= numbers2[pointer2]) {
      total.push(numbers1[pointer1]);
      pointer1++;
      continue;
    }
  }

  total.forEach((value, key) => {
    numbers1[key] = value;
  });

  return numbers1;
};

const merged = mergeSortedArray(numbers1, m, numbers2, n);

console.log(merged);
