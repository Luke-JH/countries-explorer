import type { Country, IncludeFilter, IncludeFilterKey } from "~/types/country";
import { matchesIncludeFilter } from "~/utils/includeFilters";

const PAGE_SIZE = 9;

export const useCountryFilters = (countries: Ref<Country[] | null | undefined>) => {
    const search = ref("");
    const populationMin = ref<number | null>(null);
    const populationMax = ref<number | null>(null);
    const includeFilters = ref<IncludeFilter[]>([]);
    const page = ref(1);

    const addIncludeFilter = (key: IncludeFilterKey, label: string, value: string) => {
        const trimmed = value.trim();
        if (!trimmed) return;
        includeFilters.value.push({
            id: `${key}-${trimmed}-${Date.now()}`,
            key,
            label,
            value: trimmed,
        });
    };

    const removeIncludeFilter = (id: string) => {
        includeFilters.value = includeFilters.value.filter((filter) => filter.id !== id);
    };

    const clearFilters = () => {
        search.value = "";
        populationMin.value = null;
        populationMax.value = null;
        includeFilters.value = [];
    };

    const includeFilterGroups = computed(() => {
        const groups = new Map<IncludeFilterKey, IncludeFilter[]>();
        for (const filter of includeFilters.value) {
            const group = groups.get(filter.key) ?? [];
            group.push(filter);
            groups.set(filter.key, group);
        }
        return [...groups.values()];
    });

    const filteredCountries = computed(() => {
        const list = countries.value ?? [];
        const needle = search.value.trim().toLowerCase();

        return list.filter((country) => {
            if (needle && !country.names.common.toLowerCase().includes(needle)) return false;
            if (populationMin.value !== null && country.population < populationMin.value)
                return false;
            if (populationMax.value !== null && country.population > populationMax.value)
                return false;
            return includeFilterGroups.value.every((group) =>
                group.some((filter) => matchesIncludeFilter(country, filter)),
            );
        });
    });

    const totalPages = computed(() =>
        Math.max(1, Math.ceil(filteredCountries.value.length / PAGE_SIZE)),
    );

    const pagedCountries = computed(() => {
        const start = (page.value - 1) * PAGE_SIZE;
        return filteredCountries.value.slice(start, start + PAGE_SIZE);
    });

    watch([search, populationMin, populationMax, includeFilters], () => {
        page.value = 1;
    });

    watch(totalPages, (max) => {
        if (page.value > max) page.value = max;
    });

    return {
        search,
        populationMin,
        populationMax,
        includeFilters,
        page,
        totalPages,
        pagedCountries,
        filteredCountries,
        addIncludeFilter,
        removeIncludeFilter,
        clearFilters,
    };
};
