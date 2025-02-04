type A = "a" | "b" | "c";

type MyExtract<Type, ExtractTypes> = Type extends ExtractTypes ? Type : never;

type B = MyExtract<A, "a" | "d">;

const b: B = "a";
