import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const getBaseUrl = (endpoint: string) => (endpoint ? endpoint : "/");

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const createAxios =
    (withCredentials = false) =>
    (endpoint: string): AxiosInstance =>
      axios.create({
        baseURL: getBaseUrl(endpoint),
        headers: defaultHeaders,
        withCredentials,
      });

  // Inject into Nuxt app context
  nuxtApp.provide("axios", createAxios(false));
  nuxtApp.provide("axiosPrivate", createAxios(true));
});
