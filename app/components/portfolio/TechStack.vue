<template>
  <section id="skills" class="relative py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Tech Arsenal</span>
        </h2>
        <p class="text-gray-400 text-lg">Technologies I work with on a daily basis</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="(tech, index) in techStack" :key="tech.name"
          class="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 animate-fade-in cursor-pointer overflow-hidden"
          :style="{ animationDelay: `${index * 50}ms` }">
          <!-- Hover gradient overlay -->
          <div
            class="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>

          <!-- Content -->
          <div class="relative z-10">
            <div
              class="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
              {{ tech.icon }}
            </div>
            <h3 class="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">{{ tech.name }}</h3>
            <p class="text-sm text-gray-500 mb-3">{{ tech.category }}</p>

            <!-- Skill Level Indicator -->
            <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                class="h-full bg-linear-to-r from-cyan-400 to-blue-600 transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                :style="{ width: tech.level + '%' }"></div>
            </div>
            <div class="text-xs text-cyan-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{{ tech.level
              }}%</div>
          </div>

          <!-- Corner accent -->
          <div
            class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Tech {
  name: string;
  icon: string;
  category: string;
  level: number;
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
