/**
 * Название: Custom Pick Utility Type
 * Условие: Реализовать собственный тип `MyPick`, который работает аналогично встроенному утилитному типу `Pick`
 *         из TypeScript. Он должен выбирать только указанные ключи из объекта и их значения.
 * Пример:
 *   Ввод: User (с полями id, name, email), выбрать только 'id'
 *   Вывод: тип с единственным обязательным полем id
 */

interface User {
  id: number;
  name: string;
  email: string;
}

type MyPick<Type, IncludeKeys extends keyof Type> = {
  [Key in IncludeKeys]: Type[Key];
};

const user: MyPick<User, 'id'> = {
  id: 1,
};
