<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold">
              {{ developerInitials }}
            </div>
            <span class="font-bold text-lg tracking-tight">{{ developerName }}</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a v-for="link in navLinks" :key="link.id" @click.prevent="scrollToSection(link.id)" href="#"
              class="text-gray-400 hover:text-cyan-400 transition-colors relative group cursor-pointer">
              {{ link.label }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden text-gray-400 hover:text-cyan-400 transition-colors">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 md:hidden">
        <!-- Backdrop -->
        <div @click="toggleMobileMenu" class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>

        <!-- Menu Panel -->
        <div
          class="absolute top-[73px] right-0 bottom-0 w-full max-w-sm bg-slate-900 border-l border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          <div class="flex flex-col h-full p-6">
            <!-- Navigation Links -->
            <nav class="flex-1 space-y-2">
              <a v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id); toggleMobileMenu()"
                class="block px-6 py-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all cursor-pointer border border-transparent hover:border-cyan-500/30">
                {{ link.label }}
              </a>
            </nav>

            <!-- Social Links -->
            <div class="pt-6 border-t border-cyan-500/20">
              <p class="text-xs uppercase tracking-widest text-gray-500 mb-4">Connect</p>
              <div class="grid grid-cols-2 gap-3">
                <a v-for="social in socials" :key="social.name" :href="social.url"
                  class="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg transition-all">
                  <span class="text-xl">{{ social.icon }}</span>
                  <span class="text-xs text-gray-400">{{ social.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface NavLink {
  id: string;
  label: string;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Props {
  developerName: string;
  navLinks: NavLink[];
  socials: Social[];
}

const props = defineProps<Props>();

const isMobileMenuOpen = ref(false);

const developerInitials = computed(() => {
  const names = props.developerName.split(' ');
  return names.map(n => n[0]).join('');
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

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
/* Mobile Menu Transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active>div:last-child,
.mobile-menu-leave-active>div:last-child {
  transition: transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from>div:last-child,
.mobile-menu-leave-to>div:last-child {
  transform: translateX(100%);
}
</style>
