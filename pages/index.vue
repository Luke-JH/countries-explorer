<template>
  <main class="mx-auto max-w-5xl px-3 py-8 sm:px-6 lg:px-8">
    <h1
      class="border-b border-atlas-border pb-4 font-display text-3xl text-atlas-ink dark:border-atlas-border-dark dark:text-atlas-ink-dark"
    >
      Countries list
    </h1>

    <FilterBar
      class="mt-6 mb-4"
      :search="search"
      :population-min="populationMin"
      :population-max="populationMax"
      :include-filters="includeFilters"
      @update:search="search = $event"
      @update:population-min="populationMin = $event"
      @update:population-max="populationMax = $event"
      @add-filter="addIncludeFilter"
      @remove-filter="removeIncludeFilter"
    />

    <div
      v-if="error"
      class="mt-6 rounded-lg border border-atlas-border bg-atlas-raised p-4 text-sm text-atlas-ink dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark"
      role="alert"
    >
      <p class="font-semibold">Couldn't load countries.</p>
      <p class="mt-1 text-atlas-muted dark:text-atlas-muted-dark">
        {{
          error.message ||
          "The API request failed. Check your API key and base URL in .env."
        }}
      </p>
    </div>

    <Table v-else class="mt-6" :countries="pagedCountries" :loading="pending" />

    <PaginationControls
      class="mt-6"
      :page="page"
      :total-pages="totalPages"
      @update:page="page = $event"
    />
  </main>
</template>

<script setup lang="ts">
const { data: countries, pending, error } = useCountries();

const {
  search,
  populationMin,
  populationMax,
  includeFilters,
  page,
  totalPages,
  pagedCountries,
  addIncludeFilter,
  removeIncludeFilter,
} = useCountryFilters(countries);
</script>
