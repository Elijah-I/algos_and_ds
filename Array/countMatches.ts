/**
 * Название: Count Items Matching a Rule
 * Условие: Дан список предметов, где каждый предмет представлен массивом из трёх элементов:
 *         [тип, цвет, название]. Также дано правило (ruleKey) и его значение (ruleValue).
 *         Нужно подсчитать количество предметов, которые соответствуют правилу.
 * Пример:
 *   Ввод: items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
 *         ruleKey = "color", ruleValue = "silver"
 *   Вывод: 1
 */

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
