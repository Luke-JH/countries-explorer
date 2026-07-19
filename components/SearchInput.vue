<template>
  <div class="relative">
    <label :for="inputId" class="sr-only">Search countries by name</label>
    <svg
      class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-atlas-muted dark:text-atlas-muted-dark"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" />
      <path d="m17 17-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
    <input
      :id="inputId"
      :value="modelValue"
      type="search"
      placeholder="Search"
      class="w-full rounded-md border border-atlas-border bg-atlas-raised py-2 pl-9 pr-3 text-sm text-atlas-ink placeholder:text-atlas-muted focus:border-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark dark:placeholder:text-atlas-muted-dark dark:focus:border-atlas-accent-dark dark:focus:ring-atlas-accent-dark/40"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>();
defineEmits<{ "update:modelValue": [value: string] }>();

const inputId = useId();
</script>
