<template>
  <section class="relative px-3 py-16 sm:px-6">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in stats" :key="item.label"
          class="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]">
          <p class="text-sm font-medium text-slate-400">{{ item.label }}</p>
          <div class="mt-4 flex items-end justify-between gap-4">
            <p class="text-4xl font-bold text-white">{{ item.value }}</p>
            <span class="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
              {{ item.note }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '20+', label: 'Projects Completed', note: 'Delivered' },
  { value: '3+', label: 'Years of Experience', note: 'Production' },
  { value: '10+', label: 'Tech Stacks', note: 'Daily Use' },
];
</script>
