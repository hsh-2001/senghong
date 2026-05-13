<template>
  <footer class="relative px-3 py-10 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div
        class="footer-reveal flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-5 text-center md:flex-row md:text-left">
        <div class="text-sm text-slate-500">
          <span>© {{ currentYear }} {{ developerName }}.</span>
        </div>
        <div class="flex gap-6 text-center text-sm text-slate-500">
          <p>Built with Vue.js, Nuxt, and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  developerName: string;
}

defineProps<Props>();

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
@keyframes footer-reveal {
  from {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

.footer-reveal {
  opacity: 0;
  animation: footer-reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .footer-reveal {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}
</style>
