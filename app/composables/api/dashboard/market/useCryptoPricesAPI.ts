import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { keepPreviousData } from "@tanstack/vue-query";
import { useCryptoPricesAPIFunctions } from "./useCryptoPricesAPIFunctions";
import type { AxiosRequestConfig } from "axios";

export const PROPERTY_TAG = ["properties"];


export const CRYPTO_PRICES_TAG = ["crypto-prices"];

export function useCryptoPricesAPI() {
  const queryClient = useQueryClient();
  const { getCryptoPrices } = useCryptoPricesAPIFunctions();

  // GET ALL CRYPTOPRICES
  function getCryptoPricesQuery(queryArgs: Ref<Record<string, any>>) {
    const query = computed(() => formatQueryArgs(queryArgs));
    const queryKey = computed(() => [...CRYPTO_PRICES_TAG, query?.value]);
    return useQuery({
      queryKey,
      queryFn: () => getCryptoPrices(queryArgs?.value),
      placeholderData: keepPreviousData,
    });
  }

  return {
    getCryptoPricesQuery,
  };
}
