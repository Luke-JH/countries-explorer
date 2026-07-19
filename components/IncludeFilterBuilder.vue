<template>
    <fieldset>
        <legend
            class="text-xs font-semibold uppercase tracking-wide text-atlas-muted dark:text-atlas-muted-dark"
        >
            Include
        </legend>
        <form class="mt-1.5 flex flex-wrap items-end gap-2" @submit.prevent="submit">
            <div>
                <label :for="keyId" class="sr-only">Filter key</label>
                <select
                    :id="keyId"
                    v-model="key"
                    class="rounded-md border border-atlas-border bg-atlas-raised px-2.5 py-1.5 text-sm text-atlas-ink focus:border-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark dark:focus:border-atlas-accent-dark dark:focus:ring-atlas-accent-dark/40"
                >
                    <option v-for="option in keyOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>
            <div>
                <label :for="valueId" class="sr-only">Filter value</label>
                <input
                    :id="valueId"
                    ref="valueInputRef"
                    v-model="value"
                    type="text"
                    placeholder="Value"
                    class="w-36 rounded-md border border-atlas-border bg-atlas-raised px-2.5 py-1.5 text-sm text-atlas-ink placeholder:text-atlas-muted focus:border-atlas-accent focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 dark:border-atlas-border-dark dark:bg-atlas-raised-dark dark:text-atlas-ink-dark dark:placeholder:text-atlas-muted-dark dark:focus:border-atlas-accent-dark dark:focus:ring-atlas-accent-dark/40"
                />
            </div>
            <button
                type="submit"
                class="rounded-md bg-atlas-accent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-atlas-accent/90 focus:outline-none focus:ring-2 focus:ring-atlas-accent/40 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-atlas-accent-dark dark:text-atlas-surface-dark dark:hover:bg-atlas-accent-dark/90"
                :disabled="!value.trim()"
            >
                + Add
            </button>
        </form>
    </fieldset>
</template>

<script setup lang="ts">
import type { IncludeFilterKey } from "~/types/country";

const emit = defineEmits<{
    add: [key: IncludeFilterKey, label: string, value: string];
}>();

const keyOptions: { value: IncludeFilterKey; label: string }[] = [
    { value: "region", label: "Region" },
    { value: "currency", label: "Currency" },
    { value: "language", label: "Language" },
];

const keyId = useId();
const valueId = useId();
const key = ref<IncludeFilterKey>("region");
const value = ref("");
const valueInputRef = useTemplateRef("valueInputRef");

const submit = () => {
    if (!value.value.trim()) return;
    const label = keyOptions.find((option) => option.value === key.value)?.label ?? key.value;
    emit("add", key.value, label, value.value);
    value.value = "";
    valueInputRef.value?.focus();
};
</script>
