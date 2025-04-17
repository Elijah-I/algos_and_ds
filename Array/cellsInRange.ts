const s = 'A10:C2';

const cellsInRange = (s: string): string[] => {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const extractColRow = (s: string) => {
    return [alphabet.indexOf(String(s.match(/[a-z]+/gi))), Number(s.match(/[0-9]+/gi))];
  };

  const result: string[] = [];
  const [from, to] = s.split(':');
  const [colFrom, rowFrom] = extractColRow(from);
  const [colTo, rowTo] = extractColRow(to);

  for (let col = colFrom; col <= colTo; col++) {
    for (let row = 1; row <= Math.max(rowTo, rowFrom); row++) {
      if (col === colFrom && row < rowFrom) {
        continue;
      }
      if (col === colTo && row > rowTo) {
        continue;
      }
      result.push(`${alphabet[col]}${row}`);
    }
  }

  return result;
};

const cells = cellsInRange(s);

console.log(cells);
