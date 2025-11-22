<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center px-6 pt-20">
    <div class="max-w-7xl mx-auto w-full relative z-10">
      <!-- New Centered Layout -->
      <div class="text-center mb-16 animate-fade-in">
        <!-- Profile Image with Card Container -->
        <div class="flex justify-center mb-12">
          <div class="relative group">
            <!-- Premium Card Container -->
            <div
              class="relative bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500">
              <!-- Profile Image -->
              <div class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-6">
                <!-- Rotating gradient ring -->
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-spin-slow opacity-75 blur-sm">
                </div>
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-gradient bg-size-[400%_400%] p-[4px]">
                  <div class="w-full h-full rounded-full bg-slate-950"></div>
                </div>

                <!-- Image container -->
                <div class="absolute inset-[4px] rounded-full overflow-hidden border-4 border-slate-950 shadow-2xl">
                  <img :src="profileImage" alt="Professional Developer"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <!-- Shine effect -->
                  <div
                    class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                  </div>
                </div>

                <!-- Floating orbs -->
                <div class="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse">
                </div>
                <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                  style="animation-delay: 1s;"></div>
              </div>

              <!-- Name and Status Badge -->
              <div class="space-y-4">
                <h2 class="text-3xl md:text-4xl font-bold text-white">
                  <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {{ name }}
                  </span>
                </h2>
                <p class="text-xl text-gray-400 font-medium">{{ title }}</p>

                <!-- Status badge -->
                <div
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 rounded-full">
                  <div class="relative">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div class="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <span class="text-sm font-semibold text-green-400">Available for Hire</span>
                </div>

                <!-- Quick stats -->
                <div class="flex items-center justify-center gap-6 pt-4 text-sm">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span class="text-gray-400">3+ Years</span>
                  </div>
                  <div class="w-px h-4 bg-gray-700"></div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span class="text-gray-400">10+ Projects</span>
                  </div>
                  <!-- <div class="w-px h-4 bg-gray-700"></div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span class="text-gray-400">30+ Clients</span>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- Background glow -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10 group-hover:blur-2xl transition-all">
            </div>
          </div>
        </div>

        <!-- Bio and Description -->
        <div class="space-y-6">
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {{ bio }}
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button @click.prevent="scrollToSection('contact')"
              class="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105">
              Get In Touch
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button @click.prevent="scrollToSection('projects')"
              class="px-8 py-4 border border-cyan-500/30 hover:border-cyan-500 rounded-xl font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105">
              View Projects
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center gap-4 pt-4">
            <a v-for="social in socials" :key="social.name" :href="social.url"
              class="w-12 h-12 border border-cyan-500/30 hover:border-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10 hover:scale-110 hover:-translate-y-1"
              :title="social.name">
              <span class="text-xl">{{ social.icon }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Code Preview Section -->
      <div class="max-w-3xl mx-auto mt-16">
        <div class="relative animate-slide-in-right">
          <div
            class="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20">
            <!-- Window controls -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-cyan-500/20">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer">
                </div>
                <div class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer">
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-500">developer.ts</span>
                <div class="px-2 py-0.5 bg-cyan-500/20 rounded text-xs text-cyan-400">TypeScript</div>
              </div>
            </div>

            <!-- Code with typing cursor -->
            <pre class="text-sm text-gray-300 font-mono leading-relaxed relative"><code><span class="text-purple-400">interface</span> <span class="text-cyan-400 font-bold">Developer</span> {
    <span class="text-blue-400">name</span>: <span class="text-yellow-400">string</span>;
    <span class="text-blue-400">skills</span>: <span class="text-yellow-400">string</span>[];
    <span class="text-blue-400">buildAmazingApps</span>(): <span class="text-yellow-400">void</span>;
  }

<span class="text-purple-400">const</span> <span class="text-blue-400">developer</span>: <span class="text-cyan-400">Developer</span> = {
  <span class="text-blue-400">name</span>: <span class="text-green-400">"{{ name }}"</span>,
  <span class="text-blue-400">skills</span>: [
    <span class="text-green-400">"Vue.js"</span>, 
    <span class="text-green-400">"TypeScript"</span>,
    <span class="text-green-400">"NestJS"</span>,
    <span class="text-green-400">"Nuxt"</span>, 
    <span class="text-green-400">"Firebase"</span>
    <span class="text-green-400">".Net Core"</span>, 
    <span class="text-green-400">"SQL"</span>,
  ],
  <span class="text-blue-400">buildAmazingApps</span>: () => {
    <span class="text-gray-500">// Magic happens here ✨</span>
  }
};<span class="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-blink-cursor"></span></code></pre>

            <!-- Glow effects -->
            <div
              class="absolute -right-4 -bottom-4 w-32 h-32 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl group-hover:blur-2xl transition-all">
            </div>
            <div
              class="absolute -left-4 -top-4 w-24 h-24 bg-linear-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all">
            </div>
          </div>

          <!-- Floating tech badges -->
          <div class="absolute -right-8 top-14 animate-float hidden lg:block">
            <div class="px-3 py-2 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-lg">
              <span class="text-sm text-cyan-400">⚡ Fast</span>
            </div>
          </div>
          <div class="absolute -left-16 bottom-20 animate-float-delayed hidden lg:block">
            <div class="px-3 py-2 bg-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-lg shadow-lg">
              <span class="text-sm text-blue-400">🚀 Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
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
  name: string;
  title: string;
  bio: string;
  socials: Social[];
  profileImage: string;
}

defineProps<Props>();

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
@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

.animate-slide-in-right {
  animation: slide-in-right 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes float-delayed {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes blink-cursor {

  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 5s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

.animate-blink-cursor {
  animation: blink-cursor 1s step-end infinite;
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
