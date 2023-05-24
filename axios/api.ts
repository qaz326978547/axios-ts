import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://type-script-demo.vercel.app', // 根据实际情况设置基本URL
  timeout: 5000 // 根据实际情况设置超时时间
});

export async function getData<T>(url: string, params?: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await api.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default api;
