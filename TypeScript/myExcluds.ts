type A = "a" | "b" | "c";

type MyExclude<Type, ExcludeTypes> = Type extends ExcludeTypes ? never : Type;

type B = MyExclude<A, "a" | "d">;

const b: B = "b";
