const numbers = [1, 1, 2, 3, 5];

const mapArray = <Item, Return>(
  arr: Item[],
  fn: (item: Item) => Return
): Return[] => arr.map(fn);

const numbersToStrings = mapArray(numbers, (num) => `${num}`);
