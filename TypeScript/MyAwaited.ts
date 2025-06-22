/**
 * Название: Custom Awaited Utility Type
 * Условие: Реализовать собственный тип `MyAwaited`, который работает аналогично встроенному утилитному типу `Awaited`
 *         из TypeScript. Он должен рекурсивно "распаковывать" значения внутри Promise, включая вложенные Promise.
 * Пример:
 *   Ввод: MyAwaited<Promise<string>>
 *   Вывод: string
 *
 *   Ввод: MyAwaited<Promise<Promise<number>>>
 *   Вывод: number
 *
 *   Ввод: MyAwaited<Promise<Promise<Promise<string | boolean>>>>
 *   Вывод: string | boolean
 */

type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type Test1 = MyAwaited<X>; // string
type Test2 = MyAwaited<Y>; // { field: number }
type Test3 = MyAwaited<Z>; // string | number
type Test4 = MyAwaited<Z1>; // string | boolean
type Test5 = MyAwaited<T>; // number
