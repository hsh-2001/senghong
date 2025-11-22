<template>
  <section id="experience" class="relative py-24 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p class="text-gray-400 text-lg">My professional journey</p>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 to-blue-600 hidden md:block">
        </div>

        <div class="space-y-12">
          <div v-for="(exp, index) in experience" :key="exp.id" class="relative pl-0 md:pl-20 animate-fade-in"
            :style="{ animationDelay: `${index * 150}ms` }">
            <!-- Timeline Dot -->
            <div
              class="absolute left-6 top-0 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block">
            </div>

            <div
              class="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ exp.position }}</h3>
                  <p class="text-cyan-400 font-semibold mb-1">{{ exp.company }}</p>
                  <p class="text-gray-500 text-sm">{{ exp.location }}</p>
                </div>
                <span class="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400">
                  {{ exp.period }}
                </span>
              </div>
              <p class="text-gray-400 leading-relaxed mb-4">{{ exp.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" :key="tech"
                  class="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs">
                  {{ tech }}
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
interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Props {
  experience: Experience[];
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
