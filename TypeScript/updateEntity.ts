interface User {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
}

const user: User = { id: 1, name: 'user' };
const updatedUser = updateEntity(user, { name: 'Bob' });

const post: Post = { id: 1, title: 'post' };
const updatedPost = updateEntity(post, { title: 'myPost' });

updateEntity(user, { email: 'user@mail.ru' });

function updateEntity<Entity extends object>(
  entity: Entity,
  fields: { [Key in keyof Entity]?: Entity[Key] },
): Entity {
  return Object.assign(entity, fields);
}
