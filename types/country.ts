type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "Antarctic";

interface Country {
  names: { common: string; official?: string };
  codes: { alpha_3: string };
  region: Region;
  population: number;
  capitals: { name: string }[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: { name: string; native_name: string }[];
  flag: { emoji: string; url_svg: string };
}

interface ApiEnvelope<T> {
  data: {
    objects: T[];
    meta: { total: number; count: number; limit: number; offset: number; more: boolean };
  };
}

type IncludeFilterKey = "currency" | "region" | "language";

interface IncludeFilter {
  id: string;
  key: IncludeFilterKey;
  label: string;
  value: string;
}

export type { Country, Region, ApiEnvelope, IncludeFilter, IncludeFilterKey };
