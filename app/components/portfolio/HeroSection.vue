<template>
  <section id="hero" class="relative px-3 pb-20 pt-28 sm:px-6 lg:pt-32">
    <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
      <div class="animate-fade-in">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          {{ title }}
        </p>

        <h1 class="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl">
          {{ name }}
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          {{ bio }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <button @click.prevent="scrollToSection('projects')"
            class="rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-slate-100">
            View Projects
          </button>
          <button @click.prevent="scrollToSection('contact')"
            class="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/5">
            Contact Me
          </button>
        </div>

        <div class="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          <article v-for="item in stats" :key="item.label"
            class="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <p class="text-3xl font-bold text-white">{{ item.value }}</p>
            <p class="mt-1 text-sm text-slate-400">{{ item.label }}</p>
          </article>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-for="social in socials" :key="social.name" :href="social.url" :title="social.name"
            class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-white/10">
            <SocialIcon :icon="social.icon" :name="social.name" />
            {{ social.name }}
          </a>
        </div>
      </div>

      <div class="animate-fade-in">
        <div class="rounded-[2rem] border border-white/10 bg-slate-900/75 p-5">
          <div class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
            <div class="relative">
              <img :src="profileImage" :alt="name" class="h-[24rem] w-full object-cover sm:h-[30rem]" />
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <p class="text-sm text-slate-300">{{ title }}</p>
                <p class="mt-1 text-2xl font-semibold text-white">{{ name }}</p>
              </div>
            </div>
          </div>

          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                Clean UI, stable backend work, and practical product delivery.
              </p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="item in stackPreview" :key="item" class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  {{ item }}
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
import SocialIcon from './SocialIcon.vue';

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Props {
  name: string;
  title: string;
  bio: string;
  socials: Social[];
  profileImage: string;
}

defineProps<Props>();

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: 'Full Stack', label: 'Web Development' },
];

const stackPreview = ['Vue.js', 'Nuxt.js', 'TypeScript', 'Node.js'];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.7s ease-out forwards;
}
</style>
