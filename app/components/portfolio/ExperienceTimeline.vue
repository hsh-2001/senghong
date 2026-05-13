<template>
  <section id="experience" class="relative px-3 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="experience-heading-reveal mx-auto mb-14 max-w-3xl text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Experience</span>
        </h2>
        <p class="text-lg text-slate-400">Roles and projects that shaped how I build, test, and ship software.</p>
      </div>

      <div class="space-y-6">
        <article v-for="(exp, index) in experience" :key="exp.id"
          class="experience-card-reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]"
          :style="{ animationDelay: `${index * 120}ms` }">
          <div class="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-slate-300">{{ exp.company }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-white">{{ exp.position }}</h3>
              <p class="mt-1 text-sm text-slate-500">{{ exp.location }}</p>
            </div>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {{ exp.period }}
            </span>
          </div>
          <div class="mb-5 text-slate-400 leading-7">
            <ul class="space-y-2">
              <li v-for="(desc, i) in exp.description" :key="i">
                - {{ desc }}
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" :key="tech" class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  {{ tech }}
                </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

interface Props {
  experience: Experience[];
}

defineProps<Props>();
</script>

<style scoped>
@keyframes experience-reveal {
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

.experience-heading-reveal,
.experience-card-reveal {
  opacity: 0;
  animation: experience-reveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  .experience-heading-reveal,
  .experience-card-reveal {
    opacity: 1;
    filter: none;
    transform: none;
    animation: none;
  }
}
</style>
