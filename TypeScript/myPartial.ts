interface User {
  id: number;
  name: string;
  email: string;
}

type MyPartial<Type> = {
  [Key in keyof Type]?: Type[Key];
};

const user: MyPartial<User> = {
  name: "John"
};
