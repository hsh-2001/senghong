export default defineNuxtPlugin(() => {
  const storedTheme = window.localStorage.getItem('portfolio-theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : systemTheme;

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
});
