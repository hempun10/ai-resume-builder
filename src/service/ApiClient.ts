import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const handleRequest = async <T>(
  request: () => Promise<AxiosResponse<T>>
): Promise<T> => {
  try {
    const response = await request();
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throw new Error(`Unexpected status code: ${response.status}`);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    handleRequest(() => axiosClient.get<T>(url, config)),
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    handleRequest(() => axiosClient.post<T>(url, data, config)),
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    handleRequest(() => axiosClient.put<T>(url, data, config)),
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    handleRequest(() => axiosClient.delete<T>(url, config)),
};

export default apiClient;
