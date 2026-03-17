<template>
  <svg
    v-if="platform === 'linkedin'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.25 5c0 1.1.9 2 2 2h.02a2 2 0 1 0-.02-4ZM20.75 13.02c0-3.5-1.87-5.13-4.37-5.13-2.01 0-2.91 1.11-3.42 1.9V8.5H9.58c.04.86 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.02 1.88 2.52V20h3.38v-6.98Z"
    />
  </svg>
  <svg
    v-else-if="platform === 'x'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-7.42L5.56 22H2.45l7.24-8.28L1.9 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.36 3.9H5.5L17.8 20Z"
    />
  </svg>
  <svg
    v-else-if="platform === 'telegram'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M21.94 4.64a1.5 1.5 0 0 0-1.73-.21L3.63 11.47a1.5 1.5 0 0 0 .12 2.8l3.62 1.28 1.4 4.48a1.5 1.5 0 0 0 2.6.52l2.28-2.8 3.83 2.82a1.5 1.5 0 0 0 2.35-.87l2.34-13.6a1.5 1.5 0 0 0-.23-1.46ZM9.45 14.92l8.73-7.1-6.88 8.34-.28 2.34-.99-3.16-.58-.42Zm8.42 3.44-5.54-4.08a1 1 0 0 0-1.38.18l-.53.65.43-3.58 7.88-6.42-2.86 13.25Z"
    />
  </svg>
  <svg
    v-else-if="platform === 'email'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
  <svg
    v-else
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string;
  name?: string;
}>();

const platform = computed(() => (props.icon || props.name || '').trim().toLowerCase());
</script>
