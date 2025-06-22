/**
 * Название: Memoization with Performance Tracking
 * Условие: Реализовать функцию `cacheFn`, которая кэширует результаты вызовов переданной функции
 *         и возвращает результат вместе со временем выполнения.
 *         При повторном вызове с теми же аргументами должен возвращаться закэшированный результат.
 * Пример:
 *   Ввод: cachedFactorial(7)
 *   Вывод: [5040, "0.1234ms"] (первый вызов)
 *   Вывод: [5040, "0.0001ms"] (повторный вызов из кэша)
 */

const cacheFn = <Result, Args>(fn: (...args: Args[]) => Result) => {
  const cache: Map<string, Result> = new Map();

  return (...args: Args[]) => {
    const start = performance.now();
    const cacheKey = JSON.stringify(args);

    if (!cache.get(cacheKey)) {
      cache.set(cacheKey, fn(...args));
    }

    const end = performance.now();
    const duration = Math.round((end - start) * 10000) / 10000 + 'ms';

    return [cache.get(cacheKey), duration];
  };
};

const factorial = (n: number): number => {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
};

const cachedFactorial = cacheFn(factorial);

const result = cachedFactorial(7);
const cachedResult = cachedFactorial(7);

console.log(result);
console.log(cachedResult);
