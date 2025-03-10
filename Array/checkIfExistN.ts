const arr = [10, 2, 5, 3];

const checkIfExist = (arr: number[]): boolean => {
  const hashTable: Record<number, boolean> = {};

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (hashTable[item * 2]) {
      return true;
    }

    if (item % 2 === 0 && hashTable[item / 2]) {
      return true;
    }

    hashTable[item] = true;
  }

  return false;
};

const isExists = checkIfExist(arr);

console.log(isExists);
