import type { ApiEnvelope, Country } from "~/types/country";

const PAGE_LIMIT = 100; // API's free plan ceiling
const FIELDS =
    "names.common,names.official,codes.alpha_3,region,population,currencies,languages,capitals,flag.url_svg,flag.emoji";

export const useCountries = () => {
    const { apiUrl, apiKey } = useRuntimeConfig().public;

    return useAsyncData("countries", async () => {
        const objects: Country[] = [];
        let offset = 0;

        while (true) {
            const response = await $fetch<ApiEnvelope<Country>>("", {
                baseURL: apiUrl,
                headers: { Authorization: `Bearer ${apiKey}` },
                query: { response_fields: FIELDS, limit: PAGE_LIMIT, offset },
            });
            objects.push(...response.data.objects);
            if (!response.data.meta.more) break;
            offset += PAGE_LIMIT;
        }

        return objects;
    });
};
