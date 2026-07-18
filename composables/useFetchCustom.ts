export const useFetchCustom = <T>(
  path: MaybeRefOrGetter<string>,
  options: Parameters<typeof useFetch<T>>[1] = {},
) => {
  const { apiUrl, apiKey } = useRuntimeConfig().public;

  return useFetch<T>(path, {
    baseURL: apiUrl,
    headers: { Authorization: `Bearer ${apiKey}` },
    ...options,
  });
};
