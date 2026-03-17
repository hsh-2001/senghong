<template>
  <section id="skills" class="relative px-3 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mx-auto mb-14 max-w-3xl text-center animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Technical Skills</span>
        </h2>
        <p class="text-lg text-slate-400">A practical stack I use to build interfaces, APIs, data layers, and deployments.</p>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="(tech, index) in techStack" :key="tech.name"
          class="animate-fade-in rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]"
          :style="{ animationDelay: `${index * 50}ms` }">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex min-w-0 items-center gap-3">
              <img :src="tech.image" :alt="tech.name" class="h-11 w-11 shrink-0 rounded-xl object-cover bg-white/5 p-2" />
              <div class="min-w-0">
                <h3 class="break-words text-sm font-semibold text-white sm:text-base">{{ tech.name }}</h3>
                <p class="text-xs text-slate-500 sm:text-sm">{{ tech.category }}</p>
              </div>
            </div>
            <span class="self-start rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
              {{ tech.level }}%
            </span>
          </div>
          <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
            <div class="h-full rounded-full bg-white" :style="{ width: tech.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Tech {
  name: string;
  category: string;
  level: number;
  image?: string;
}

interface Props {
  techStack: Tech[];
}

defineProps<Props>();
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}
</style>
