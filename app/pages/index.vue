<template>
  <div class="min-h-screen bg-slate-950 text-white overflow-x-hidden">
    <!-- Enhanced Animated Background -->
    <AnimatedBackground />

    <!-- Navigation -->
    <Navigation :developer-name="developer.name" :nav-links="navLinks" :socials="developer.socials" />

    <!-- Hero Section -->
    <HeroSection :name="developer.name" :title="developer.title" :bio="developer.bio" :socials="developer.socials"
      :profile-image="profileImage" />

    <!-- Stats Counter Section -->
    <StatsCounter />

    <!-- Tech Stack Section -->
    <TechStack :tech-stack="techStack" />

    <!-- Projects Section -->
    <ProjectsSection :projects="projects" />

    <!-- Experience Timeline -->
    <ExperienceTimeline :experience="experience" />

    <!-- Study Background Section -->
    <StudyBackground :education="education" />

    <!-- Contact Section -->
    <ContactSection :socials="developer.socials" />

    <!-- Footer -->
    <Footer :developer-name="developer.name" />
  </div>
</template>

<script setup lang="ts">
import AnimatedBackground from '~/components/portfolio/AnimatedBackground.vue';
import Navigation from '~/components/portfolio/Navigation.vue';
import HeroSection from '~/components/portfolio/HeroSection.vue';
import StatsCounter from '~/components/portfolio/StatsCounter.vue';
import TechStack from '~/components/portfolio/TechStack.vue';
import ProjectsSection from '~/components/portfolio/ProjectsSection.vue';
import ExperienceTimeline from '~/components/portfolio/ExperienceTimeline.vue';
import StudyBackground from '~/components/portfolio/StudyBackground.vue';
import ContactSection from '~/components/portfolio/ContactSection.vue';
import Footer from '~/components/portfolio/TheFooter.vue';
import { usePortfolioData } from '~/composables/usePortfolioData';

const {
  profileImage,
  developer,
  navLinks,
  techStack,
  projects,
  experience,
  education,
} = usePortfolioData();

// SEO Configuration
const siteUrl = 'https://senghong-portfolio.web.app';
const title = 'Hang Senghong - Full Stack Developer';
const description = 'Full Stack Developer specializing in Vue.js, Nuxt.js, .NET Core, and modern web technologies. Building scalable, high-performance applications with clean code and exceptional user experiences.';

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'Full Stack Developer, Vue.js Developer, Nuxt.js Developer, .NET Core Developer, TypeScript, Firebase, Web Development, Software Engineer, Hang Senghong, Cambodia Developer, Frontend Developer, Backend Developer, Mobile Development, Flutter' },
    { name: 'author', content: 'Hang Senghong' },

    // Open Graph
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: siteUrl },
    { property: 'og:site_name', content: 'Hang Senghong Portfolio' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '@Hongprogrammer' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Hang Senghong',
        jobTitle: 'Full Stack Developer',
        url: siteUrl,
        sameAs: [
          'https://www.linkedin.com/in/hang-senghong-158674383',
          'https://x.com/Hongprogrammer',
          'https://github.com/Senghong-2025',
          'https://senghong.pages.dev',
        ],
        description: 'Full Stack Developer specializing in building scalable, high-performance applications with modern technologies.',
        knowsAbout: [
          'Vue.js',
          'Nuxt.js',
          'TypeScript',
          'Firebase',
          '.NET Core',
          'C#',
          'SQL Server',
          'Docker',
          'PostgreSQL',
          'MongoDB',
          'Node.js',
          'Flutter',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Norton University',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Phnom Penh',
            addressCountry: 'Cambodia',
          },
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Techbodia',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Veal Sbov',
            addressCountry: 'Cambodia',
          },
        },
      }),
    },
  ],
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800;900&display=swap');
* {
  font-family: 'Nunito', 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: 0.01em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
}

html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #2563eb);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #22d3ee, #3b82f6);
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>
