/**
 * Название: Extend Number Prototype with plus and minus
 * Условие: Расширить прототип Number методами `plus` и `minus`,
 *         которые увеличивают или уменьшают исходное число на заданное значение.
 * Пример:
 *   Ввод: (2).plus(3).minus(1)
 *   Вывод: 4
 */

Number.prototype.plus = function (number) {
  return this + number;
};

Number.prototype.minus = function (number) {
  return this - number;
};

console.log((2).plus(3).minus(1));
