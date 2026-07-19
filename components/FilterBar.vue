<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-x-8 gap-y-4">
      <PopulationRangeFilter
        :min="populationMin"
        :max="populationMax"
        @update:min="$emit('update:populationMin', $event)"
        @update:max="$emit('update:populationMax', $event)"
      />
      <IncludeFilterBuilder @add="onAddFilter" />
    </div>
    <FilterChipList :filters="includeFilters" @remove="$emit('removeFilter', $event)" />
    <SearchInput :model-value="search" class="max-w-xs" @update:model-value="$emit('update:search', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { IncludeFilter, IncludeFilterKey } from "~/types/country";

defineProps<{
  search: string;
  populationMin: number | null;
  populationMax: number | null;
  includeFilters: IncludeFilter[];
}>();

const emit = defineEmits<{
  "update:search": [value: string];
  "update:populationMin": [value: number | null];
  "update:populationMax": [value: number | null];
  addFilter: [key: IncludeFilterKey, label: string, value: string];
  removeFilter: [id: string];
}>();

const onAddFilter = (key: IncludeFilterKey, label: string, value: string) => {
  emit("addFilter", key, label, value);
};
</script>
