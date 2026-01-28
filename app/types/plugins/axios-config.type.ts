import type { AxiosInstance, AxiosRequestConfig, Method } from "axios";
export interface AxiosConfigObject {
  axiosInstance: AxiosInstance | ComputedRef<AxiosInstance>;
  method: Method | ComputedRef<string>;
  url: string | ComputedRef<string>;
  requestConfig?: AxiosRequestConfig | ComputedRef<AxiosRequestConfig>;
}
