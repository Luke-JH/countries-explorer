<template>
  <nav aria-label="Pagination" class="flex items-center justify-center gap-1">
    <button
      type="button"
      class="nav-btn"
      :disabled="page === 1"
      aria-label="First page"
      @click="$emit('update:page', 1)"
    >
      «
    </button>
    <button
      type="button"
      class="nav-btn"
      :disabled="page === 1"
      aria-label="Previous page"
      @click="$emit('update:page', page - 1)"
    >
      ‹
    </button>
    <template v-for="(item, index) in items" :key="index">
      <span v-if="item === 'gap'" class="px-1 text-atlas-muted dark:text-atlas-muted-dark" aria-hidden="true">…</span>
      <button
        v-else
        type="button"
        class="nav-btn min-w-8"
        :aria-current="item === page ? 'page' : undefined"
        :aria-label="`Page ${item}`"
        :class="item === page && 'bg-atlas-accent text-white dark:bg-atlas-accent-dark dark:text-atlas-surface-dark'"
        @click="$emit('update:page', item)"
      >
        {{ item }}
      </button>
    </template>
    <button
      type="button"
      class="nav-btn"
      :disabled="page === totalPages"
      aria-label="Next page"
      @click="$emit('update:page', page + 1)"
    >
      ›
    </button>
    <button
      type="button"
      class="nav-btn"
      :disabled="page === totalPages"
      aria-label="Last page"
      @click="$emit('update:page', totalPages)"
    >
      »
    </button>
  </nav>
</template>

<script setup lang="ts">
const { page, totalPages } = defineProps<{ page: number; totalPages: number }>();
defineEmits<{ "update:page": [page: number] }>();

const items = computed<(number | "gap")[]>(() => {
  const pages = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  const sorted = [...pages].filter((n) => n >= 1 && n <= totalPages).sort((a, b) => a - b);

  const result: (number | "gap")[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1]! > 1) result.push("gap");
    result.push(n);
  });
  return result;
});
</script>

<style scoped>
.nav-btn {
  @apply grid h-8 min-w-8 place-items-center rounded-md px-2 text-sm text-atlas-ink transition-colors hover:bg-atlas-raised focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 disabled:cursor-not-allowed disabled:opacity-40 dark:text-atlas-ink-dark dark:hover:bg-atlas-raised-dark;
}
</style>
