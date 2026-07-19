<template>
    <fieldset>
        <legend
            class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
        >
            Population
        </legend>
        <div class="mt-1.5 flex items-center gap-2">
            <label :for="minId" class="sr-only">Minimum population</label>
            <input
                :id="minId"
                :value="min"
                type="number"
                inputmode="numeric"
                min="0"
                placeholder="Low"
                class="w-24 rounded-md border border-atlas-border bg-atlas-raised px-2.5 py-1.5 text-sm text-atlas-ink placeholder:text-atlas-muted focus:border-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark dark:placeholder:text-atlas-muted-dark dark:focus:border-atlas-accent-dark dark:focus:ring-atlas-accent-dark/40"
                @input="onInput('min', $event)"
            />
            <span class="text-sm text-atlas-muted dark:text-atlas-muted-dark" aria-hidden="true"
                >to</span
            >
            <label :for="maxId" class="sr-only">Maximum population</label>
            <input
                :id="maxId"
                :value="max"
                type="number"
                inputmode="numeric"
                min="0"
                placeholder="High"
                class="w-24 rounded-md border border-atlas-border bg-atlas-raised px-2.5 py-1.5 text-sm text-atlas-ink placeholder:text-atlas-muted focus:border-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark dark:placeholder:text-atlas-muted-dark dark:focus:border-atlas-accent-dark dark:focus:ring-atlas-accent-dark/40"
                @input="onInput('max', $event)"
            />
        </div>
    </fieldset>
</template>

<script setup lang="ts">
const { min, max } = defineProps<{ min: number | null; max: number | null }>();
const emit = defineEmits<{
    "update:min": [value: number | null];
    "update:max": [value: number | null];
}>();

const minId = useId();
const maxId = useId();

const onInput = (bound: "min" | "max", event: Event) => {
    const raw = (event.target as HTMLInputElement).value;
    const parsed = raw === "" ? null : Number(raw);
    if (bound === "min") emit("update:min", parsed);
    else emit("update:max", parsed);
};
</script>
