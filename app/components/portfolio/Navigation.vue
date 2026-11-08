<template>
  <div>
    <!-- Navigation -->
    <nav
      class="site-navigation fixed left-1/2 z-50 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-2xl border backdrop-blur-2xl"
      :class="[
        isScrolled
          ? 'site-navigation-scrolled border-white/15 bg-slate-950/95 shadow-2xl shadow-black/30'
          : 'border-white/15 bg-slate-950/80 shadow-xl shadow-black/15',
        isScrolled ? 'top-3' : 'top-5'
      ]"
    >
      <div class="px-2 sm:px-3" :class="isScrolled ? 'py-2' : 'py-2.5'">
        <div class="flex items-center gap-2 sm:gap-3">
          <a href="#hero" @click.prevent="scrollToSection('hero')" class="brand-lockup flex shrink-0 items-center gap-2.5 rounded-xl px-2 py-1.5 sm:pr-3">
            <div
              :class="isDark
                ? 'border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 text-cyan-100 shadow-inner shadow-white/10'
                : 'border-cyan-800/15 bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-950 shadow-inner shadow-white/80'"
              class="brand-mark flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-extrabold">
              {{ developerInitials }}
            </div>
            <span class="hidden whitespace-nowrap text-sm font-bold tracking-tight text-white sm:block">{{ developerName }}</span>
          </a>
          <div class="nav-divider hidden h-7 w-px bg-white/10 md:block"></div>
          <div class="nav-links hidden items-center gap-0.5 md:flex">
            <a v-for="link in navLinks" :key="link.id" @click.prevent="scrollToSection(link.id)" href="#"
              :class="activeLink === link.id ? 'nav-link-active text-white' : 'text-gray-400 hover:bg-white/[0.06] hover:text-white'"
              class="nav-link relative cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold transition duration-200">
              {{ link.label }}
            </a>
          </div>
          <div class="nav-divider hidden h-7 w-px bg-white/10 md:block"></div>
          <div class="flex shrink-0 items-center gap-1.5">
            <button type="button" @click="toggleTheme"
              class="nav-control flex h-9 w-9 items-center justify-center rounded-xl text-gray-300 transition hover:bg-white/10 hover:text-white"
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
            <button @click="toggleMobileMenu" :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu" class="nav-control flex h-9 w-9 items-center justify-center rounded-xl text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden">
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
        <div
          @click="toggleMobileMenu"
          :class="isDark ? 'bg-slate-950/80' : 'bg-slate-200/70'"
          class="mobile-menu-backdrop absolute inset-0 backdrop-blur-sm"
        ></div>

        <!-- Menu Panel -->
        <div
          :class="isDark ? 'border-white/10 bg-slate-900' : 'border-slate-300/80 bg-white/95'"
          :style="{ top: isScrolled ? '64px' : '76px' }"
          class="mobile-menu-panel absolute left-1/2 bottom-3 w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 rounded-2xl border shadow-2xl">
          <div class="flex flex-col h-full p-6">
            <!-- Navigation Links -->
            <nav class="flex-1 space-y-2">
              <a
                v-for="link in navLinks"
                :key="link.id"
                @click="scrollToSection(link.id); toggleMobileMenu()"
                :class="isDark
                  ? 'border-transparent text-gray-300 hover:border-white/10 hover:bg-slate-800/50 hover:text-white'
                  : 'border-transparent text-slate-800 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950'"
                class="mobile-menu-card block cursor-pointer rounded-lg border px-6 py-4 transition-all"
              >
                {{ link.label }}
              </a>
            </nav>

            <!-- Social Links -->
            <div :class="isDark ? 'border-white/10' : 'border-slate-300/80'" class="border-t pt-6">
              <button type="button" @click="toggleTheme"
                :class="isDark
                  ? 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                  : 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200'"
                class="mobile-menu-card mb-4 flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm transition"
              >
                <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
              </button>
              <p :class="isDark ? 'text-gray-500' : 'text-slate-500'" class="mb-4 text-xs uppercase tracking-widest">Connect</p>
              <div class="grid grid-cols-2 gap-3">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.url"
                  :class="isDark
                    ? 'border-white/10 bg-slate-800/50 text-gray-300 hover:bg-slate-800'
                    : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'"
                  class="mobile-menu-card flex items-center justify-center gap-2 rounded-lg border px-4 py-3 transition-all"
                >
                  <SocialIcon :icon="social.icon" :name="social.name" />
                  <span :class="isDark ? 'text-gray-400' : 'text-slate-700'" class="text-xs">{{ social.name }}</span>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
const isScrolled = ref(false);
const activeLink = ref('');

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 24;
  const currentSection = [...props.navLinks].reverse().find(({ id }) => {
    const section = document.getElementById(id);
    return section && section.getBoundingClientRect().top <= 140;
  });
  if (currentSection) activeLink.value = currentSection.id;
};

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState);
});

const developerInitials = computed(() => {
  const names = props.developerName.split(' ');
  return names.map(n => n[0]).join('');
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (id: string) => {
  activeLink.value = id;
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
/* The header tightens slightly after leaving the hero, keeping the content in view. */
.site-navigation {
  transition: top 280ms ease, background-color 280ms ease, box-shadow 280ms ease, border-color 280ms ease;
}

.site-navigation > div {
  transition: padding 280ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.brand-lockup {
  transition: background-color 220ms ease;
}

.brand-lockup:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.brand-mark {
  transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 240ms ease;
}

.brand-mark:hover {
  transform: rotate(-7deg) scale(1.08);
  box-shadow: 0 0 20px rgba(103, 232, 249, 0.18);
}

.nav-link-active {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
}

.nav-control {
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease;
}

.nav-control:active {
  transform: scale(0.94);
}

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

@media (prefers-reduced-motion: reduce) {
  .site-navigation,
  .site-navigation > div,
  .brand-lockup,
  .brand-mark,
  .nav-link,
  .nav-control,
  .mobile-menu-enter-active,
  .mobile-menu-leave-active,
  .mobile-menu-enter-active > div:last-child,
  .mobile-menu-leave-active > div:last-child {
    transition-duration: 0.01ms !important;
  }
}
</style>
