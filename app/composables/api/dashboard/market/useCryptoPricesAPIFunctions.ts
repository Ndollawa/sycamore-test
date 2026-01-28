import type { AxiosInstance, AxiosRequestConfig } from "axios";


export function useCryptoPricesAPIFunctions() {
const { $axiosPrivate } = useNuxtApp();
const axiosInstance = $axiosPrivate() as unknown as AxiosInstance ;

  const getCryptoPrices = async (requestConfig?: AxiosRequestConfig) => {
    const res = await axiosInstance.get("/api/dashboard/crypto", requestConfig);
    return res?.data;
  };



  return {

    getCryptoPrices,
  };
}
