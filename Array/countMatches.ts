const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'lenovo'],
  ['phone', 'gold', 'iphone'],
];
const ruleKey = 'color';
const ruleValue = 'silver';

const countMatches = <T extends 'type' | 'color' | 'name'>(
  items: string[][],
  ruleKey: T,
  ruleValue: string,
): number => {
  const bindKey = { type: 0, color: 1, name: 2 };

  return items.reduce((total, item) => {
    if (item[bindKey[ruleKey]] === ruleValue) {
      total++;
    }
    return total;
  }, 0);
};

const total = countMatches(items, ruleKey, ruleValue);

console.log(total);
