type ObjectType = Record<string, unknown>;

export function withProperties<A, B>(component: A, properties: B): A & B {
  if (properties instanceof Object) {
    Object.assign(component as ObjectType, properties);
  }

  return component as A & B;
}
