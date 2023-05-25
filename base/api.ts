import { asyncDo } from './index';
import { $http, isResponseOK } from './http';

export interface IP {
  id: number;
  isCompleted: boolean;
  content: string;
}
export namespace Api {
  export async function getTodoList(data?: { tz?: string }) {
    const [err, result] = await asyncDo($http<{ data: IP[] }>('get', '/todoList', data));
    if (!isResponseOK(err, result)) {
      return null;
    }
    return result;
  }
}
