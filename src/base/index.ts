export function asyncDo<T, E = any>(promise: Promise<T>): Promise<[undefined, T] | [E, undefined]> {
  return promise.then<[undefined, T]>((res) => [undefined, res]).catch((err) => [err, undefined]);
}
