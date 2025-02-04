interface User {
  id: number;
  name: string;
  email: string;
}

type MyOmit<Type, ExcludeKeys extends keyof Type> = {
  [Key in keyof Type as Key extends ExcludeKeys ? never : Key]: Type[Key];
};

const user: MyOmit<User, "email" | "id"> = {
  name: "John"
};
