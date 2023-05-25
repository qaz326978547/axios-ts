import axios, { type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios';
const apiUrl = 'https://type-script-demo.vercel.app';

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

export async function $http<T>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  return await api.request<T>({
    method,
    url,
    data,
    ...config
  });
}
export async function asyncData<T>(fn: () => Promise<T>): Promise<T | null> {
  return fn()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
}
