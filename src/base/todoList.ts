import { asyncDo } from './index';
import { $http, isResponseOK } from './http';
import type { TodoList } from './type';
export namespace TodoListApi {
  export async function getTodoList(data?: { content?: string }): Promise<TodoList[] | null> {
    const [err, res] = await asyncDo($http<TodoList[]>('get', '/todoList', data));
    if (!isResponseOK(err, res)) {
      console.log(res);
      return null;
    }
    return res as TodoList[] | null;
  }
}
