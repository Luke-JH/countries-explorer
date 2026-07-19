<template>
  <span class="inline-flex items-center gap-1.5">
    <span
      class="h-2.5 w-2.5 shrink-0 rounded-full"
      :class="regionSwatchClass(region)"
      aria-hidden="true"
    />
    <span>{{ region }}</span>
  </span>
</template>

<script setup lang="ts">
import type { Region } from "~/types/country";

defineProps<{ region: Region }>();
</script>
