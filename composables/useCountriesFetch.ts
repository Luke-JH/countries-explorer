export const useCountriesFetch = <T>(
  path: MaybeRefOrGetter<string>,
  params: MaybeRefOrGetter<Record<string, string>> = {},
  options: Parameters<typeof useFetchCustom<T>>[1] = {},
) => {
  return useFetchCustom<T>(path, { query: params, ...options });
};
