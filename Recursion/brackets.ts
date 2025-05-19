const data = '{[()]}()';

const checkBrackets = (data: string): boolean => {
  const pairs: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  if (!data.length) return true;

  let pairSum = 1;
  let closedPosition = -1;
  const currentBracket = data[0];
  const rest = data.slice(1);

  for (let i = 0; i < rest.length; i++) {
    const char = rest[i];

    if (char === currentBracket) pairSum++;
    if (char === pairs[currentBracket]) pairSum--;

    if (pairSum === 0) {
      closedPosition = i;
      break;
    }
  }

  if (closedPosition === -1) return false;

  const inside = rest.slice(0, closedPosition);
  const after = rest.slice(closedPosition + 1);

  return checkBrackets(inside) && checkBrackets(after);
};

const checked = checkBrackets(data);

console.log(checked);
