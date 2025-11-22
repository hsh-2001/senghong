<template>
  <section id="contact" class="relative py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <div class="animate-fade-in">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Work
            Together</span>
        </h2>
        <p class="text-xl text-gray-400 mb-4">
          Have a project in mind? Let's build something amazing.
        </p>
        <p class="text-gray-500 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="mailto:senghonghang@gmail.com"
            class="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Email
          </a>
          <a href="#"
            class="px-8 py-4 border border-cyan-500/30 hover:border-cyan-500 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 flex items-center justify-center gap-3">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center gap-4">
          <a v-for="social in socials" :key="social.name" :href="social.url"
            class="w-14 h-14 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10 hover:scale-110">
            <span class="text-2xl">{{ social.icon }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Props {
  socials: Social[];
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
