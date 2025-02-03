const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];

const restoreString = (s: string, indices: number[]): string => {
  const result: string[] = [];

  Array.from(s).forEach((char, order) => {
    result[indices[order]] = char;
  });

  return result.join("");
};

const restoredString = restoreString(s, indices);

console.log(restoredString);
