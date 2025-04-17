const s = 'abcd';

const reverseString = (s: string) => {
  let reversedString = '';

  const stack = [];
  for (const char of s) {
    stack.push(char);
  }
  while (stack.length) {
    reversedString += stack.pop();
  }

  return reversedString;
};

const reversed = reverseString(s);

console.log(reversed);
