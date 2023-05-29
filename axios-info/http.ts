import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios';
import { AppEvents, appEmitter } from '@base/modules/event';
import { apiUrl, uploadUrl } from '@base/config/meta';

export const apiBaseUrl = `${apiUrl}/api`;

const apiTimeoutSec = 60;

const ajax = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true, //跨域請求時是否需要使用憑證
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest' //ajax 異步請求
  },
  timeout: apiTimeoutSec * 1000 //超時時間 超時會丟出錯誤
});

export async function $http<T = any>(method: Method, url: string, ...payload: any[]): Promise<T> {
  const requestData: AxiosRequestConfig = { url, method };

  if (method == 'get' || method == 'GET') {
    console.log(payload);

    requestData.params = payload[0];
  } else {
    requestData.data = payload[0];
    requestData.params = payload[1];
  }

  try {
    const response = await ajax.request(requestData);
    return response.data;
  } catch (err: any) {
    if (err.response) {
      throw err.response;
    }
    throw err;
  }
}

export function isNetworkError(err) {
  return !!err.isAxiosError && !err.response;
}

export function isResponseOK(err: any, result: any, alertError: boolean = false) {
  if (err && !result) {
    console.warn(err, result);
    if (err.status == 401) {
      appEmitter.emit(AppEvents.Logout);
    }
    if (alertError) {
      const errData = err.data;
      let message = '';
      if (typeof errData == 'string') {
        message = errData;
      } else {
        message = errData.message;
        try {
          Object.values(errData.errors || {}).forEach((e) => {
            message += `<br>${e[0]}`;
          });
        } catch (err) {
          console.error(err);
        }
      }
      appEmitter.emit(AppEvents.Modal, message);
    }
    return false;
  }
  return true;
}
