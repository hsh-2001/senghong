<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-3 py-4 sm:px-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-bold">
              {{ developerInitials }}
            </div>
            <span class="font-bold text-lg tracking-tight">{{ developerName }}</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a v-for="link in navLinks" :key="link.id" @click.prevent="scrollToSection(link.id)" href="#"
              class="relative cursor-pointer text-gray-400 transition-colors hover:text-white">
              {{ link.label }}
              <span
                class="absolute -bottom-1 left-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" @click="toggleTheme"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
              <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9 9 0 008.354-5.646z" />
              </svg>
            </button>
            <button @click="toggleMobileMenu" class="md:hidden text-gray-400 transition-colors hover:text-white">
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
          </div>
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
          class="absolute top-[73px] right-0 bottom-0 w-full max-w-sm border-l border-white/10 bg-slate-900 shadow-2xl">
          <div class="flex flex-col h-full p-6">
            <!-- Navigation Links -->
            <nav class="flex-1 space-y-2">
              <a v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id); toggleMobileMenu()"
                class="block cursor-pointer rounded-lg border border-transparent px-6 py-4 text-gray-300 transition-all hover:border-white/10 hover:bg-slate-800/50 hover:text-white">
                {{ link.label }}
              </a>
            </nav>

            <!-- Social Links -->
            <div class="border-t border-white/10 pt-6">
              <button type="button" @click="toggleTheme"
                class="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
              </button>
              <p class="text-xs uppercase tracking-widest text-gray-500 mb-4">Connect</p>
              <div class="grid grid-cols-2 gap-3">
                <a v-for="social in socials" :key="social.name" :href="social.url"
                  class="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-4 py-3 transition-all hover:bg-slate-800">
                  <SocialIcon :icon="social.icon" :name="social.name" />
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
import { useTheme } from '~/composables/useTheme';
import SocialIcon from './SocialIcon.vue';

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
const { isDark, toggleTheme } = useTheme();

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
