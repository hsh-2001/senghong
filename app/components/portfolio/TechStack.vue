<template>
  <section id="skills" class="relative px-3 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="skills-heading-reveal mx-auto mb-14 max-w-3xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Technical Skills</span>
        </h2>
        <p class="text-lg text-slate-400">A practical stack I use to build interfaces, APIs, data layers, and deployments.</p>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div v-for="(tech, index) in techStack" :key="tech.name"
          class="skill-card-reveal rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]"
          :style="{ '--skill-delay': `${index * 50}ms` }">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="flex min-w-0 items-center gap-3">
              <img :src="tech.image" :alt="tech.name" class="h-11 w-11 shrink-0 rounded-xl object-cover bg-white/5 p-2" />
              <div class="min-w-0">
                <h3 class="wrap-break-word text-sm font-semibold text-white sm:text-base">{{ tech.name }}</h3>
                <p class="text-xs text-slate-500 sm:text-sm">{{ tech.category }}</p>
              </div>
            </div>
            <span class="self-start rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
              {{ tech.level }}%
            </span>
          </div>
          <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
            <div class="skill-progress h-full rounded-full bg-white" :style="{ width: tech.level + '%' }"></div>
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
@keyframes skills-heading-reveal {
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

@keyframes skill-card-reveal {
  from {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(18px) scale(0.96);
  }

  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
  }
}

.skills-heading-reveal,
.skill-card-reveal {
  opacity: 0;
  animation: skills-heading-reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.skill-card-reveal {
  animation-name: skill-card-reveal;
  animation-delay: var(--skill-delay, 0ms);
}

.skill-progress {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--skill-delay, 0ms) + 180ms);
}

.skill-card-reveal .skill-progress {
  animation: skill-progress-reveal 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--skill-delay, 0ms) + 180ms);
}

@keyframes skill-progress-reveal {
  to {
    transform: scaleX(1);
  }
}

.skill-card-reveal:hover .skill-progress {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  .skills-heading-reveal,
  .skill-card-reveal,
  .skill-progress {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
    transition: none;
  }
}
</style>
