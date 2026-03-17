<template>
  <section id="projects" class="relative py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Featured
            Projects</span>
        </h2>
        <p class="text-gray-400 text-lg">Some of my personal projects that I'm proud of</p>
      </div>

      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <div v-for="(project, index) in projects" :key="project.id" class="group relative flex flex-col h-full
             bg-slate-900/60 backdrop-blur-xl
             border border-white/10
             rounded-3xl overflow-hidden
             transition-all duration-500 ease-out
             hover:-translate-y-3 hover:scale-[1.02]
             hover:shadow-[0_20px_60px_-15px_rgba(0,255,255,0.25)]">

            <div class="absolute inset-0 rounded-3xl
                  bg-linear-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0
                  opacity-0 group-hover:opacity-100
                  blur-xl transition duration-500 pointer-events-none">
            </div>

            <div class="relative h-56 overflow-hidden">

              <img v-if="project.background" :src="project.background" alt="background" class="w-full h-full object-cover
                 transition duration-700
                 group-hover:scale-110
                 group-hover:brightness-110" />

              <div v-else :class="project.gradient" class="absolute inset-0 flex items-center justify-center
                 transition duration-700 group-hover:scale-110">
                <span class="text-7xl opacity-30">
                  {{ project.icon }}
                </span>
              </div>

              <div class="absolute inset-0
                    bg-linear-to-t from-black/80 via-black/30 to-transparent">
              </div>

              <div class="absolute top-4 right-4 px-3 py-1
                    bg-black/60 backdrop-blur-md
                    rounded-full text-xs text-cyan-400
                    border border-cyan-400/30
                    transition duration-300
                    group-hover:bg-cyan-500/20">
                {{ project.status }}
              </div>

            </div>

            <div class="flex flex-col grow p-6 space-y-4">
              <h3 class="text-2xl font-bold text-white
                   transition duration-300
                   group-hover:text-cyan-400
                   group-hover:tracking-wide">
                {{ project.name }}
              </h3>

              <p class="text-gray-400 text-sm leading-relaxed
                  transition duration-300
                  group-hover:text-gray-300">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 text-xs rounded-full
                   bg-cyan-500/10 border border-cyan-500/30
                   text-cyan-400
                   transition duration-300
                   group-hover:bg-cyan-500/20
                   group-hover:scale-105">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-auto flex gap-3 pt-4">
                <a v-if="project.github" :href="project.github" target="_blank" class="flex-1 py-2.5 rounded-xl text-sm font-medium
                   bg-white/5 hover:bg-white/10
                   border border-white/10
                   transition duration-300
                   flex items-center justify-center gap-2
                   hover:scale-105 active:scale-95">
                  💻 Code
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" class="flex-1 py-2.5 rounded-xl text-sm font-medium
                   bg-linear-to-r from-cyan-500 to-blue-600
                   hover:from-cyan-400 hover:to-blue-500
                   transition duration-300
                   flex items-center justify-center gap-2
                   hover:scale-105 active:scale-95">
                  🚀 Demo
                </a>
              </div>
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
