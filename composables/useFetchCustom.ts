import type { UseFetchOptions } from "#app";

export const useFetchCustom = <T>(
    path: MaybeRefOrGetter<string>,
    options: UseFetchOptions<T> = {},
) => {
    const { apiUrl, apiKey } = useRuntimeConfig().public;

    const defaults: UseFetchOptions<T> = {
        baseURL: apiUrl,
        headers: { Authorization: `Bearer ${apiKey}` },
    };

    return useFetch(path, { ...defaults, ...options });
};
