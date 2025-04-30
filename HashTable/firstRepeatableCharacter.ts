const str = 'green apple';

const firstRepeatableCharacter = (str: string) => {
  const chars = new Map();

  for (const char of str) {
    if (chars.has(char)) {
      return char;
    }

    chars.set(char, true);
  }

  return null;
};

const first = firstRepeatableCharacter(str);

console.log(first);
