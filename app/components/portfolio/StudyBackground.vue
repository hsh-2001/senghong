<template>
  <section id="education" class="relative px-3 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mx-auto mb-14 max-w-3xl text-center animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-white">Education</span>
        </h2>
        <p class="text-lg text-slate-400">Academic background and continuous learning that support my development work.</p>
      </div>

      <div class="space-y-6">
        <article v-for="(edu, index) in education" :key="edu.id"
          class="animate-fade-in rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.9)]"
          :style="{ animationDelay: `${index * 120}ms` }">
          <div class="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p class="text-sm font-medium text-slate-300">{{ edu.institution }}</p>
              <h3 class="mt-2 text-2xl font-semibold text-white">{{ edu.degree }}</h3>
              <p class="mt-1 text-sm text-slate-500">{{ edu.location }}</p>
            </div>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {{ edu.period }}
            </span>
          </div>
          <p class="mb-5 leading-7 text-slate-400">{{ edu.description }}</p>
          <div v-if="edu.achievements && edu.achievements.length > 0" class="mb-5">
                <h4 class="mb-2 text-sm font-semibold text-slate-200">Key Achievements</h4>
                <ul class="space-y-2">
                  <li v-for="achievement in edu.achievements" :key="achievement" class="text-sm text-slate-400">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
          <div v-if="edu.skills && edu.skills.length > 0" class="flex flex-wrap gap-2">
                <span v-for="skill in edu.skills" :key="skill" class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                  {{ skill }}
                </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
}

interface Props {
  education: Education[];
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
