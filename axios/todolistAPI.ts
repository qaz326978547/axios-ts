import { asyncDo } from '../base/index';
import { $http, isResponseOK } from '../base/http';
export namespace TodoApi {
  interface TodoList {
    id?: number;
    isCompleted: boolean;
    content: string;
  }

  export async function fetchTodoList(data?: { content?: string }): Promise<TodoList[] | null> {
    const [err, res] = await asyncDo($http<TodoList[]>('get', '/todoList', data));
    if (!isResponseOK(err, res, true)) {
      console.log(res);
      return null;
    }
    //
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  export async function addTodoItem(data?: TodoList) {
    const [err, result] = await asyncDo($http<{ data: TodoList }>('post', '/todolist', data));
    console.log('result', [err, result]);

    if (!isResponseOK(err, result)) {
      return null;
    }
    return result;
  }

  export async function removeTodoItem(id: number | undefined) {
    const [err, result] = await asyncDo($http<{ data: TodoList }>('delete', `/todolist/${id}`));
    if (!isResponseOK(err, result)) {
      return null;
    }
    return result;
  }
}
