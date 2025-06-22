/**
 * Название: Get Object Property Safely
 * Условие: Реализовать типобезопасную функцию `getProperty`, которая принимает объект и ключ,
 *         и возвращает значение по этому ключу. Если ключ существует — вернуть значение,
 *         если нет — поведение может быть любым (в TypeScript это ошибка на этапе компиляции).
 * Пример:
 *   Ввод: getProperty({ a: 1, b: 2, c: 3 }, 'b')
 *   Вывод: 2
 *
 *   Вызов getProperty(x, 'm') вызовет ошибку на этапе компиляции, так как 'm' не существует в объекте.
 */

const x = { a: 1, b: 2, c: 3, d: 4 };

function getProperty<Object, Key extends keyof Object>(obj: Object, key: Key): Object[Key] {
  return obj[key];
}

getProperty(x, 'a');
getProperty(x, 'm');
