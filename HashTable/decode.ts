const decodeMessage = (key: string, message: string): string => {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  const uniqKeys = Array.from(new Set(key.replaceAll(' ', '')));

  return message
    .split('')
    .map((char) => (char === ' ' ? char : alphabet[uniqKeys.indexOf(char) || 0]))
    .join('');
};

const message = decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv');

console.log(message);
