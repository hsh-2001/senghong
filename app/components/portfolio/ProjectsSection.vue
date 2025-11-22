<template>
  <section id="projects" class="relative py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Featured
            Projects</span>
        </h2>
        <p class="text-gray-400 text-lg">Some of my recent work that I'm proud of</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="project.id"
          class="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in"
          :style="{ animationDelay: `${index * 100}ms` }">
          <!-- Project Image/Gradient -->
          <div class="relative h-48 overflow-hidden" :class="project.gradient">
            <div class="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-60"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <img v-if="project.background" class="w-full h-full object-contain" :src="project.background"
                alt="background">
              <span v-else class="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">{{
                project.icon }}</span>
            </div>
            <div
              class="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs text-cyan-400 border border-cyan-500/30">
              {{ project.status }}
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 space-y-4">
            <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tech Tags -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400">
                {{ tech }}
              </span>
            </div>

            <!-- Project Links -->
            <div class="flex gap-3 pt-2">
              <a v-if="project.github" :href="project.github" target="_blank"
                class="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg text-sm font-medium text-center transition-all duration-300 flex items-center justify-center gap-2">
                <span>💻</span> Code
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank"
                class="flex-1 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg text-sm font-medium text-center transition-all duration-300 flex items-center justify-center gap-2">
                <span>🚀</span> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
  status: string;
  github?: string;
  demo?: string;
  background?: string;
}

interface Props {
  projects: Project[];
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
