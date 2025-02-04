const x = { a: 1, b: 2, c: 3, d: 4 };

function getProperty<Object, Key extends keyof Object>(
  obj: Object,
  key: Key
): Object[Key] {
  return obj[key];
}

getProperty(x, "a");
getProperty(x, "m");
