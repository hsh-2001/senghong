import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

const theme = ref<ThemeMode>('dark');
const hasExplicitPreference = ref(false);

let mediaQuery: MediaQueryList | null = null;
let mediaQueryHandler: ((event: MediaQueryListEvent) => void) | null = null;

const applyTheme = (value: ThemeMode) => {
  theme.value = value;

  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
  }
};

const getSystemTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initializeTheme = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;

  hasExplicitPreference.value = storedTheme === 'light' || storedTheme === 'dark';
  applyTheme(storedTheme ?? getSystemTheme());

  if (!mediaQuery) {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  }

  if (!mediaQueryHandler) {
    mediaQueryHandler = (event: MediaQueryListEvent) => {
      if (!hasExplicitPreference.value) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    };
  }

  mediaQuery.addEventListener('change', mediaQueryHandler);
};

const cleanupThemeListener = () => {
  if (mediaQuery && mediaQueryHandler) {
    mediaQuery.removeEventListener('change', mediaQueryHandler);
  }
};

export const useTheme = () => {
  onMounted(() => {
    initializeTheme();
  });

  onBeforeUnmount(() => {
    cleanupThemeListener();
  });

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme.value === 'dark' ? 'light' : 'dark';
    hasExplicitPreference.value = true;
    applyTheme(nextTheme);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    }
  };

  return {
    theme: computed(() => theme.value),
    isDark: computed(() => theme.value === 'dark'),
    toggleTheme,
  };
};
