/**
 * Название: Template Literal Types with Union
 * Условие: Использовать возможности TypeScript 4.1+ для создания новых типов через строковые литералы.
 *         Создать тип, который оборачивает значения юнион-типа в квадратные скобки.
 * Пример:
 *   Ввод: Status = 'idle' | 'pending' | 'fulfilled'
 *   Вывод: "[idle]", "[pending]", "[fulfilled]"
 */

type Status = 'idle' | 'pending' | 'fulfilled';

type StatusWithBrackets = `[${Status}]`;
type StatusWithBracketsLong = { [K in Status]: `[${K}]` }[Status];

const status: StatusWithBracketsLong = '[idle]';
