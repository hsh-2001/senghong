<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-G5XX198FZB",
      async: true,
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-G5XX198FZB');
      `
    }
  ]
})
</script>
