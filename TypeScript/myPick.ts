interface User {
  id: number;
  name: string;
  email: string;
}

type MyPick<Type, IncludeKeys extends keyof Type> = {
  [Key in keyof Type as Key extends IncludeKeys ? Key : never]: Type[Key];
};

const user: MyPick<User, "id"> = {
  id: 1
};
