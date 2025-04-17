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
