<template>
  <NuxtPage />
</template>

<script setup lang="ts">
  onMounted(async () => {
  try {
    await $fetch('/api/notify', {
      method: 'POST',
    });
  } catch (err) {
    console.error('Notify failed', err);
  }
});
</script>
