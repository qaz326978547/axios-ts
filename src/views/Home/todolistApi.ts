import type { TodoList } from './type';
import { $http, asyncData } from './api';

export async function getTodoList(): Promise<TodoList | null> {
  const res = await asyncData(() => $http<TodoList>('get', '/todolist'));
  return res?.data ?? null;
}
