import type { Country, IncludeFilter, IncludeFilterKey } from "~/types/country";

const matchers: Record<IncludeFilterKey, (country: Country) => string[]> = {
  region: (country) => [country.region],
  currency: (country) => country.currencies.map((c) => c.name),
  language: (country) => country.languages.map((l) => l.name),
};

const matchesIncludeFilter = (country: Country, filter: IncludeFilter) => {
  const needle = filter.value.trim().toLowerCase();
  if (!needle) return true;
  return matchers[filter.key](country).some((value) => value.toLowerCase().includes(needle));
};

export { matchesIncludeFilter };
