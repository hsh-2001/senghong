
<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      innerHTML: `
        (() => {
          const storedTheme = localStorage.getItem('portfolio-theme');
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme;
          document.documentElement.dataset.theme = resolvedTheme;
          document.documentElement.style.colorScheme = resolvedTheme;
        })();
      `,
    },
  ],
});

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
