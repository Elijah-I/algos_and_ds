/**
 * Название: Check Balanced Expression with Multiple Bracket Types
 * Условие: Дано строковое выражение, содержащее круглые `()`, квадратные `[]`, угловые `< >` и фигурные `{}` скобки.
 *         Нужно проверить, является ли выражение сбалансированным: каждая открывающая скобка должна иметь
 *         соответствующую закрывающую скобку в правильном порядке.
 * Пример:
 *   Ввод: "{(([a] + <b>))[c]}"
 *   Вывод: true
 *
 *   Ввод: "(([a] + <b>)[c]"
 *   Вывод: false
 */

const expressionA = '{(([a] + <b>))[c]}';
const expressionB = '(([a] + <b>)[c]';

const isBalancedExpression = (expression: string): boolean => {
  const stack: string[] = [];
  const openBrackets = ['(', '[', '<', '{'];
  const closeBrackets = [')', ']', '>', '}'];

  for (const char of expression) {
    const openType = openBrackets.findIndex((bracket) => bracket === char);
    const closeType = closeBrackets.findIndex((bracket) => bracket === char);

    if (openType !== -1) {
      stack.push(char);
      continue;
    }

    if (closeType !== -1) {
      const lastOpenType = openBrackets.findIndex((bracket) => bracket === stack[stack.length - 1]);

      if (lastOpenType !== closeType) {
        return false;
      }

      stack.pop();
    }
  }

  return !stack.length;
};

const isBalancedA = isBalancedExpression(expressionA);
const isBalancedB = isBalancedExpression(expressionB);

console.log(isBalancedA, isBalancedB);
