const numbers = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = (
  numbers: number[] | string[],
  val: number
): number[] | string[] => {
  const lastIndex = numbers.length - 1;

  for (let position = 0; position <= lastIndex; position++) {
    if (numbers[position] === val) {
      for (let i = Number(position) + 1; i <= lastIndex; i++) {
        numbers[i - 1] = numbers[i];
        position--;
      }
      if (!Number.isNaN(numbers[lastIndex])) {
        numbers[lastIndex] = "_";
      }
    }
  }

  return numbers;
};

const cleanArray = removeElement(numbers, val);

console.log(cleanArray);
