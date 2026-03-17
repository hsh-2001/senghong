<template>
  <section id="hero" class="relative overflow-hidden px-3 pb-20 pt-28 sm:px-6 lg:pt-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)]"></div>
    </div>

    <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
      <div>
        <div
          class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
          <span class="h-2.5 w-2.5 rounded-full bg-white"></span>
          Available for new opportunities
        </div>

        <p class="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          {{ title }}
        </p>

        <h1 class="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl">
          Hi, I'm {{ name }}.
          <span class="block text-slate-300">I build modern web applications.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {{ bio }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <button @click.prevent="scrollToSection('projects')"
            class="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100">
            View Projects
          </button>
          <button @click.prevent="scrollToSection('contact')"
            class="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
            Contact Me
          </button>
          <a href="/files/Hang_Senghong_Fullstack_developer_CV.pdf" download
            class="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
            Download CV
          </a>
        </div>

        <div class="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          <div v-for="item in stats" :key="item.label"
            class="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm">
            <p class="text-3xl font-bold text-white">{{ item.value }}</p>
            <p class="mt-1 text-sm text-slate-400">{{ item.label }}</p>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-for="social in socials" :key="social.name" :href="social.url" :title="social.name"
            class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-200 transition hover:bg-slate-800/80">
            <SocialIcon :icon="social.icon" :name="social.name" />
            {{ social.name }}
          </a>
        </div>
      </div>

      <div class="flex justify-center lg:justify-end">
        <div class="relative w-full max-w-md">
          <div class="absolute inset-0 rounded-[2rem] bg-white/5 blur-3xl"></div>

          <div class="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl">
            <div class="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
              <div class="relative overflow-hidden rounded-[1.25rem]">
                <img :src="profileImage" :alt="name" class="h-[25rem] w-full object-cover sm:h-[30rem]" />
                <div class="hero-profile-overlay absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent"></div>

                <div class="hero-profile-caption absolute bottom-0 left-0 right-0 p-6">
                  <p class="hero-profile-role text-sm">{{ title }}</p>
                  <p class="hero-profile-name mt-1 text-2xl font-semibold">{{ name }}</p>
                </div>
              </div>
            </div>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
                <p class="mt-2 text-sm leading-6 text-slate-300">
                  Clean UI, scalable architecture, and practical product delivery.
                </p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span v-for="item in stackPreview" :key="item"
                    class="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {{ item }}
                  </span>
                </div>
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
.hero-profile-caption {
  background: linear-gradient(180deg, transparent 0%, rgba(2, 2, 2, 0.4) 24%, rgba(2, 2, 2, 0.82) 100%);
}

.hero-profile-role {
  color: rgba(226, 232, 240, 0.92);
}

.hero-profile-name {
  color: #ffffff;
}

:global(html[data-theme='light']) .hero-profile-overlay {
  background: linear-gradient(to top, rgba(15, 15, 15, 0.86), rgba(15, 15, 15, 0.18), transparent);
}

:global(html[data-theme='light']) .hero-profile-caption {
  background: linear-gradient(180deg, transparent 0%, rgba(15, 15, 15, 0.34) 28%, rgba(15, 15, 15, 0.76) 100%);
}

:global(html[data-theme='light']) .hero-profile-role {
  color: rgba(244, 244, 245, 0.88);
}

:global(html[data-theme='light']) .hero-profile-name {
  color: #ffffff;
}
</style>
