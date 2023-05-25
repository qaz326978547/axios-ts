import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { AppEvents, appEmitter } from './modules/event';
import type { Method } from 'axios';

export const apiBaseUrl = `https://type-script-demo.vercel.app/`;

const ajax = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export async function $http<T>(method: Method, url: string, ...payload: any[]): Promise<T> {
  const requestData: AxiosRequestConfig = { url, method };

  if (method == 'get' || method == 'GET') {
    console.log('true', payload);
    requestData.params = payload[0];
  } else {
    console.log('else 0', payload[0]);
    console.log('else 1', payload[1]);

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

export function isNetworkError(err: { isAxiosError: any; response: any }) {
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
