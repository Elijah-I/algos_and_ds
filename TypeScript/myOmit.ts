/**
 * Название: Custom Omit Utility Type
 * Условие: Реализовать собственный тип `MyOmit`, который работает аналогично встроенному утилитному типу `Omit`
 *         из TypeScript. Он должен исключать из объекта указанные ключи и их значения.
 * Пример:
 *   Ввод: User (с полями id, name, email), исключить 'email' и 'id'
 *   Вывод: тип с единственным полем name
 */

interface User {
  id: number;
  name: string;
  email: string;
}

type MyOmit<Type, ExcludeKeys extends keyof Type> = {
  [Key in Exclude<keyof Type, ExcludeKeys>]: Type[Key];
};

const user: MyOmit<User, 'email' | 'id'> = {
  name: 'John',
};
