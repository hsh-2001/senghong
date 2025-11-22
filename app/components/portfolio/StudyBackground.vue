<template>
  <section id="education" class="relative py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Education</span>
        </h2>
        <p class="text-gray-400 text-lg">My academic journey</p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 to-blue-600 hidden md:block">
        </div>

        <div class="space-y-12">
          <div v-for="(edu, index) in education" :key="edu.id" class="relative pl-0 md:pl-20 animate-fade-in"
            :style="{ animationDelay: `${index * 150}ms` }">
            <!-- Timeline Dot -->
            <div
              class="absolute left-6 top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block">
            </div>

            <div
              class="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ edu.degree }}</h3>
                  <p class="text-cyan-400 font-semibold mb-1">{{ edu.institution }}</p>
                  <p class="text-gray-500 text-sm">{{ edu.location }}</p>
                </div>
                <span class="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                  {{ edu.period }}
                </span>
              </div>
              <p class="text-gray-400 leading-relaxed mb-4">{{ edu.description }}</p>
              <div v-if="edu.achievements && edu.achievements.length > 0" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="achievement in edu.achievements" :key="achievement" class="text-gray-400 text-sm">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
              <div v-if="edu.skills && edu.skills.length > 0" class="flex flex-wrap gap-2">
                <span v-for="skill in edu.skills" :key="skill"
                  class="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
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
