<template>
    <main class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <NuxtLink
            to="/"
            class="inline-flex items-center gap-1 text-sm text-atlas-muted transition-colors hover:text-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:text-atlas-muted-dark dark:hover:text-atlas-accent-dark"
        >
            ‹ Back to list
        </NuxtLink>

        <div
            v-if="error"
            class="mt-6 rounded-lg border border-atlas-border bg-atlas-raised p-4 text-sm dark:border-atlas-border-dark dark:bg-atlas-raised-dark"
            role="alert"
        >
            Couldn't load this country.
        </div>

        <div v-else-if="pending" class="mt-6 animate-pulse motion-reduce:animate-none">
            <div class="h-8 w-64 rounded bg-atlas-border dark:bg-atlas-border-dark" />
            <div class="mt-4 h-40 w-full rounded bg-atlas-border dark:bg-atlas-border-dark" />
        </div>

        <template v-else-if="country">
            <div class="mt-6 flex items-center gap-4">
                <img
                    v-if="country.flag.url_svg"
                    :src="country.flag.url_svg"
                    :alt="`Flag of ${country.names.common}`"
                    class="h-12 w-16 rounded border border-atlas-border object-cover dark:border-atlas-border-dark"
                />
                <div>
                    <h1 class="font-display text-2xl text-atlas-ink dark:text-atlas-ink-dark">
                        {{ country.flag.emoji }} {{ country.names.common }}
                    </h1>
                    <p class="text-sm text-atlas-muted dark:text-atlas-muted-dark">
                        {{ country.names.official }}
                    </p>
                </div>
            </div>

            <dl class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                    <dt
                        class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
                    >
                        Region
                    </dt>
                    <dd class="mt-1"><RegionTag :region="country.region" /></dd>
                </div>
                <div>
                    <dt
                        class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
                    >
                        Population
                    </dt>
                    <dd class="mt-1 tabular-nums text-atlas-ink dark:text-atlas-ink-dark">
                        {{ formatPopulation(country.population) }}
                    </dd>
                </div>
                <div v-if="capitalNames.length">
                    <dt
                        class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
                    >
                        Capital
                    </dt>
                    <dd class="mt-1 text-atlas-ink dark:text-atlas-ink-dark">
                        {{ capitalNames.join(", ") }}
                    </dd>
                </div>
                <div v-if="currencyNames.length">
                    <dt
                        class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
                    >
                        Currencies
                    </dt>
                    <dd class="mt-1 text-atlas-ink dark:text-atlas-ink-dark">
                        {{ currencyNames.join(", ") }}
                    </dd>
                </div>
                <div v-if="languageNames.length">
                    <dt
                        class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
                    >
                        Languages
                    </dt>
                    <dd class="mt-1 text-atlas-ink dark:text-atlas-ink-dark">
                        {{ languageNames.join(", ") }}
                    </dd>
                </div>
            </dl>
        </template>
    </main>
</template>

<script setup lang="ts">
import type { ApiEnvelope, Country } from "~/types/country";

const route = useRoute();
const name = computed(() => String(route.params.code));

const { data, pending, error } = useFetchCustom<ApiEnvelope<Country>>(
    computed(() => `/names.common/${encodeURIComponent(name.value)}`),
);

const country = computed(() => data.value?.data.objects[0]);
const capitalNames = computed(() => country.value?.capitals.map((c) => c.name) ?? []);
const currencyNames = computed(() => country.value?.currencies.map((c) => c.name) ?? []);
const languageNames = computed(() => country.value?.languages.map((l) => l.name) ?? []);
</script>
