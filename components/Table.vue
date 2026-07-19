<template>
  <div class="overflow-x-auto rounded-lg border border-atlas-border dark:border-atlas-border-dark">
    <table class="w-full min-w-full border-collapse text-sm sm:min-w-[520px]">
      <caption class="sr-only">
        Countries matching the current filters, sorted by name.
      </caption>
      <thead>
        <tr class="border-b border-atlas-border bg-atlas-raised/60 dark:border-atlas-border-dark dark:bg-atlas-raised-dark/60">
          <th scope="col" class="px-1 py-2.5 text-left font-semibold text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">Name</th>
          <th scope="col" class="px-1 py-2.5 text-left font-semibold text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">
            Currency
          </th>
          <th scope="col" class="px-1 py-2.5 text-left font-semibold text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">Region</th>
          <th scope="col" class="px-1 py-2.5 text-right font-semibold text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">
            Population
          </th>
          <th scope="col" class="px-1 py-2.5 text-right sm:px-4">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody :aria-busy="loading">
        <template v-if="loading">
          <TableSkeletonRow v-for="n in skeletonRows" :key="n" />
        </template>
        <template v-else-if="countries.length">
          <tr
            v-for="country in countries"
            :key="country.names.common"
            class="border-b border-atlas-border last:border-b-0 hover:bg-atlas-raised/60 dark:border-atlas-border-dark dark:hover:bg-atlas-raised-dark/60"
          >
            <td
              class="max-w-[4rem] truncate px-1 py-2.5 text-atlas-ink sm:max-w-none sm:px-4 dark:text-atlas-ink-dark"
              :title="country.names.common"
            >
              {{ country.names.common }}
            </td>
            <td
              class="max-w-[3.5rem] truncate px-1 py-2.5 text-atlas-ink sm:max-w-none sm:px-4 dark:text-atlas-ink-dark"
              :title="primaryCurrency(country)"
            >
              {{ primaryCurrency(country) }}
            </td>
            <td class="px-1 py-2.5 text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">
              <RegionTag :region="country.region" />
            </td>
            <td class="px-1 py-2.5 text-right tabular-nums text-atlas-ink sm:px-4 dark:text-atlas-ink-dark">
              {{ formatPopulation(country.population) }}
            </td>
            <td class="px-1 py-2.5 text-right sm:px-4">
              <NuxtLink
                :to="`/countries/${encodeURIComponent(country.names.common)}`"
                class="inline-block rounded-md border border-atlas-border px-1.5 py-1 text-xs text-atlas-ink transition-colors hover:border-atlas-accent hover:text-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 sm:px-3 sm:text-sm dark:border-atlas-border-dark dark:text-atlas-ink-dark dark:hover:border-atlas-accent-dark dark:hover:text-atlas-accent-dark"
                :aria-label="`Open ${country.names.common}`"
              >
                Open
              </NuxtLink>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="5" class="px-4 py-8 text-center text-atlas-muted dark:text-atlas-muted-dark">
            No countries match your filters.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p v-if="loading" class="sr-only" role="status">Loading countries…</p>
</template>

<script setup lang="ts">
import type { Country } from "~/types/country";

const { countries, loading = false, skeletonRows = 9 } = defineProps<{
  countries: Country[];
  loading?: boolean;
  skeletonRows?: number;
}>();

const primaryCurrency = (country: Country) => country.currencies[0]?.name ?? "—";
</script>
