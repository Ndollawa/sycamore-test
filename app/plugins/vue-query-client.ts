import {
	VueQueryPlugin,
	QueryClient,
	hydrate,
	dehydrate,
} from "@tanstack/vue-query";
import type {
	DehydratedState,
	VueQueryPluginOptions,
} from "@tanstack/vue-query";

export const STALE_TIME = 5 * 60 * 1000;
export const GC_TIME = 50 * 60 * 1000;
export const REFRESH_INTERVAL = 5 * 60 * 1000;

export default defineNuxtPlugin((nuxtApp) => {
	const vueQueryState = useState<DehydratedState | null>(
		"vue-query",
		() => null,
	);

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 1,
				refetchOnMount: true,
				refetchOnWindowFocus: true,
				refetchOnReconnect: true,
				refetchInterval: REFRESH_INTERVAL,
				staleTime: STALE_TIME,
				gcTime: GC_TIME,
        
				queryKeyHashFn: (queryKey) => {
					const userScopedKey = [...queryKey];
					return JSON.stringify(userScopedKey);
				},
			},
		},
	});

	const vueQueryOptions: VueQueryPluginOptions = { queryClient };
	nuxtApp.vueApp.use(VueQueryPlugin, vueQueryOptions);

	if (import.meta.server) {
		nuxtApp.hooks.hook("app:rendered", () => {
			vueQueryState.value = dehydrate(queryClient);
		});
	}

	if (import.meta.client) {
		nuxtApp.hooks.hook("app:created", () => {
			if (vueQueryState.value) {
				hydrate(queryClient, vueQueryState.value);
			}
		});
	}
});
