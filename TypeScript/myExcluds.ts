/**
 * Название: Custom Exclude Utility Type
 * Условие: Реализовать собственный тип `MyExclude`, который работает аналогично встроенному утилитному типу `Exclude`
 *         из TypeScript. Он должен исключать из типа Type все типы, которые совпадают с ExcludeTypes.
 * Пример:
 *   Ввод: MyExclude<'a' | 'b' | 'c', 'a' | 'd'>
 *   Вывод: 'b' | 'c'
 */

type A = 'a' | 'b' | 'c';

type MyExclude<Type, ExcludeTypes> = Type extends ExcludeTypes ? never : Type;

type B = MyExclude<A, 'a' | 'd'>;

const b: B = 'b';
