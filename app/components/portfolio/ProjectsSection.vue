<template>
  <section id="projects" class="relative px-0 py-24 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <div class="px-3 mb-14 animate-fade-in sm:px-0">
        <div class="mx-auto max-w-3xl text-center">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Portfolio Work</p>
          <h2 class="mb-4 text-4xl font-bold md:text-5xl">
            <span class="text-white">Featured Projects</span>
          </h2>
          <p class="text-lg text-slate-400">Selected work focused on clean interfaces, stable architecture, and practical delivery.</p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto py-10">
        <div class="sm:hidden space-y-6">
          <div ref="mobileSliderRef" class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory mobile-slider"
            @scroll="handleMobileScroll">
            <article v-for="project in projects" :key="project.id"
              class="project-card flex min-w-[92%] snap-center flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/70">
              <div class="relative h-52 overflow-hidden">
                <img v-if="project.background" :src="project.background" alt="background"
                  class="h-full w-full object-cover" />

                <div v-else :class="project.gradient"
                  class="absolute inset-0 flex items-center justify-center">
                  <span class="text-7xl opacity-30">
                    {{ project.icon }}
                  </span>
                </div>

                <div class="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>

                <div :class="statusClass(project.status)"
                  class="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[11px] font-medium">
                  {{ project.status }}
                </div>
              </div>

              <div class="flex grow flex-col p-5">
                <div class="mb-2 flex items-center justify-between gap-3">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Project {{ String(project.id).padStart(2, '0') }}
                  </p>
                  <div class="flex items-center gap-1 text-slate-500">
                  <span class="text-xs">{{ project.technologies.length }} tech</span>
                  </div>
                </div>

                <h3 class="text-xl font-semibold leading-tight text-white">
                  {{ project.name }}
                </h3>

                <p class="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                  {{ project.description }}
                </p>

                <div class="mt-4 flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                    class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 4"
                    class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                    +{{ project.technologies.length - 4 }}
                  </span>
                </div>

                <div class="mt-auto flex gap-2 pt-5">
                  <a v-if="project.github" :href="project.github" target="_blank"
                    class="flex flex-1 items-center justify-center rounded-lg border border-white/10 py-2.5 text-sm font-medium text-slate-200 transition active:scale-95">
                    View Code
                  </a>
                  <a v-if="project.demo" :href="project.demo" target="_blank"
                    class="flex flex-1 items-center justify-center rounded-lg bg-white py-2.5 text-sm font-semibold text-black transition active:scale-95">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div class="px-3 flex items-center justify-between gap-4 sm:px-0">
            <div class="flex items-center gap-2">
              <button v-for="(project, index) in projects" :key="`dot-${project.id}`" type="button"
                :aria-label="`Go to ${project.name}`" @click="scrollToProject(index)" :class="[
                  'h-2.5 rounded-full transition-all duration-300',
                  currentProjectIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/20'
                ]" />
            </div>

            <div class="flex items-center gap-3">
              <button type="button" aria-label="Previous project" @click="scrollToProject(currentProjectIndex - 1)"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                :disabled="currentProjectIndex === 0">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button type="button" aria-label="Next project" @click="scrollToProject(currentProjectIndex + 1)"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                :disabled="currentProjectIndex === projects.length - 1">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="project in projects" :key="project.id"
            class="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/70 transition duration-200 hover:border-white/20">
            <div class="relative h-52 overflow-hidden">
              <img v-if="project.background" :src="project.background" alt="background"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]" />

              <div v-else :class="project.gradient"
                class="absolute inset-0 flex items-center justify-center">
                <span class="text-7xl opacity-30">
                  {{ project.icon }}
                </span>
              </div>

              <div class="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/10 to-transparent"></div>

              <div :class="statusClass(project.status)"
                class="absolute left-4 top-4 rounded-full border px-2.5 py-1 text-[11px] font-medium">
                {{ project.status }}
              </div>
            </div>

            <div class="flex grow flex-col p-5">
              <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Project {{ String(project.id).padStart(2, '0') }}
              </p>

              <h3 class="text-xl font-semibold leading-tight text-white">
                {{ project.name }}
              </h3>

              <p class="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
                {{ project.description }}
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
                  class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-auto flex gap-2 pt-5">
                <a v-if="project.github" :href="project.github" target="_blank"
                  class="flex flex-1 items-center justify-center rounded-lg border border-white/10 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/5 active:scale-95">
                  View Code
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank"
                    class="flex flex-1 items-center justify-center rounded-lg bg-white py-2.5 text-sm font-semibold text-black transition hover:bg-slate-100 active:scale-95">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

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

const props = defineProps<Props>();

const mobileSliderRef = ref<HTMLElement | null>(null);
const currentProjectIndex = ref(0);

const updateCurrentProjectIndex = () => {
  const slider = mobileSliderRef.value;
  if (!slider) {
    return;
  }

  const cardWidth = slider.clientWidth * 0.88 + 20;
  currentProjectIndex.value = Math.min(
    props.projects.length - 1,
    Math.max(0, Math.round(slider.scrollLeft / cardWidth))
  );
};

const handleMobileScroll = () => {
  updateCurrentProjectIndex();
};

const statusClass = (status: string) => {
  if (status.toLowerCase().includes('live')) {
    return 'border-white/10 bg-slate-950/80 text-slate-200';
  }

  return 'border-white/10 bg-slate-950/80 text-slate-200';
};

const scrollToProject = (index: number) => {
  const slider = mobileSliderRef.value;
  if (!slider) {
    return;
  }

  const safeIndex = Math.min(props.projects.length - 1, Math.max(0, index));
  const firstCard = slider.querySelector<HTMLElement>('.project-card');

  if (!firstCard) {
    return;
  }

  slider.scrollTo({
    left: safeIndex * (firstCard.offsetWidth + 20),
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('resize', updateCurrentProjectIndex);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCurrentProjectIndex);
});
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

.mobile-slider {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.mobile-slider::-webkit-scrollbar {
  display: none;
}

</style>
