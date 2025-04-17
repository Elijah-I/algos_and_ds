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
