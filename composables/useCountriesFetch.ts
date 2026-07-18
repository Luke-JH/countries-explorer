import type { UseFetchOptions } from "#app";

export const useCountriesFetch = <T>(
  path: MaybeRefOrGetter<string>,
  options: UseFetchOptions<T> = {},
) => {
  return useFetchCustom(path, options);
};
