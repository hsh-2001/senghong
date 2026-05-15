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

const { logAction } = useActionLog();
const sessiont = ref();
onMounted(() => {
  if (window.sessionStorage) {
    sessiont.value = window.sessionStorage.getItem('sessionId');
  }
  if (!sessiont.value) {
    sessiont.value = crypto.randomUUID();
    window.sessionStorage.setItem('sessionId', sessiont.value);
    logAction();
  }
});
</script>
