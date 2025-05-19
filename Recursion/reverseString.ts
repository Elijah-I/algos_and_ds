const string = 'abcde';

const reverseString = (string: string): string => {
  if (!string) return '';

  const char = string[0];
  const rest = string.slice(1);

  return reverseString(rest) + char;
};

const reversed = reverseString(string);

console.log(reversed);
