/**
 * Название: Custom Partial Utility Type
 * Условие: Реализовать собственный тип `MyPartial`, который работает аналогично встроенному утилитному типу `Partial`
 *         из TypeScript. Он должен делать все свойства объекта необязательными.
 * Пример:
 *   Ввод: User (с полями id, name, email)
 *   Вывод: тип, в котором все поля опциональны — можно передать только name, только id и т.д.
 */

interface User {
  id: number;
  name: string;
  email: string;
}

type MyPartial<Type> = {
  [Key in keyof Type]?: Type[Key];
};

const user: MyPartial<User> = {
  name: 'John',
};
