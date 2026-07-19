<template>
  <ul v-if="filters.length" class="flex flex-wrap gap-2" aria-label="Active filters">
    <li v-for="filter in filters" :key="filter.id">
      <span
        class="inline-flex items-center gap-1.5 rounded-full border border-atlas-border bg-atlas-raised py-1 pl-2.5 pr-1.5 text-xs text-atlas-ink dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark"
      >
        <span class="h-2 w-2 shrink-0 rounded-full" :class="dotClass(filter)" aria-hidden="true" />
        <span>{{ filter.label }}: {{ filter.value }}</span>
        <button
          type="button"
          class="ml-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-atlas-muted transition-colors hover:bg-atlas-border hover:text-atlas-ink focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:text-atlas-muted-dark dark:hover:bg-atlas-border-dark dark:hover:text-atlas-ink-dark"
          :aria-label="`Remove ${filter.label} filter: ${filter.value}`"
          @click="$emit('remove', filter.id)"
        >
          <svg viewBox="0 0 12 12" class="h-2.5 w-2.5" fill="none" aria-hidden="true">
            <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { IncludeFilter, Region } from "~/types/country";

const KNOWN_REGIONS: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];

defineProps<{ filters: IncludeFilter[] }>();
defineEmits<{ remove: [id: string] }>();

const dotClass = (filter: IncludeFilter) => {
  if (filter.key === "region") {
    const match = KNOWN_REGIONS.find((region) => region.toLowerCase() === filter.value.toLowerCase());
    if (match) return regionSwatchClass(match);
  }
  return "bg-atlas-accent dark:bg-atlas-accent-dark";
};
</script>
