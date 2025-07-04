/**
 * Название: Longest Valid Parentheses
 * Условие: Дано строка, состоящая только из символов '(' и ')'.
 *         Нужно найти длину самой длинной подстроки, содержащей корректно сбалансированные скобки.
 * Пример:
 *   Ввод: "(()()"
 *   Вывод: 2 (самая валидная подстрока — "()")
 */

const s = '(()()';

const longestValidParentheses = (s: string): number => {
  let maxLen = 0;
  const stack: number[] = [];
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLen;
};

const longest = longestValidParentheses(s);

console.log(longest);
