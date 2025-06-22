/**
 * Название: Custom Extract Utility Type
 * Условие: Реализовать собственный тип `MyExtract`, который работает аналогично встроенному утилитному типу `Extract`
 *         из TypeScript. Он должен оставлять только те типы из Type, которые совпадают с ExtractTypes.
 * Пример:
 *   Ввод: MyExtract<'a' | 'b' | 'c', 'a' | 'd'>
 *   Вывод: 'a'
 */

type A = 'a' | 'b' | 'c';

type MyExtract<Type, ExtractTypes> = Type extends ExtractTypes ? Type : never;

type B = MyExtract<A, 'a' | 'd'>;

const b: B = 'a';
