const numbers = [0, 1, 4, 6, 7, 10];
const diff = 3;

const arithmeticTriplets = (numbers: number[], diff: number): number => {
  if (numbers.length < 2) {
    return 0;
  }

  let triples = 0;

  let pointerI = 0;
  let pointerJ = pointerI + 1;
  let pointerK = pointerJ + 1;

  while (pointerI !== numbers.length - 2) {
    if (
      numbers[pointerJ] - numbers[pointerI] === diff &&
      numbers[pointerK] - numbers[pointerJ] === diff
    ) {
      triples++;
    }

    pointerK++;

    if (pointerK === numbers.length + 1) {
      pointerJ++;
      pointerK = pointerJ + 1;
    }

    if (pointerJ === numbers.length) {
      pointerI++;
      pointerJ = pointerI + 1;
      pointerK = pointerJ + 1;
    }
  }

  return triples;
};

const triples = arithmeticTriplets(numbers, diff);

console.log(triples);
