/**
 * Название: Cells in a Range on an Excel Sheet
 * Условие: Дан диапазон ячеек в Excel-формате (например, "A1:C2").
 *         Нужно вернуть список всех ячеек в этом диапазоне, отсортированных по возрастанию номеров строк и столбцов.
 *         Каждая ячейка представляется в виде строки, например "A1", "B2" и т.д.
 * Пример:
 *   Ввод: s = "A10:C2"
 *   Вывод: ["A2", "B2", "C2", "A3", "B3", "C3", ..., "C10"]
 */

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
