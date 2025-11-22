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

import profileImageSrc from '~/assets/profiles/profile.jpg';

interface NavLink {
  id: string;
  label: string;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

interface Tech {
  name: string;
  icon: string;
  category: string;
  level: number;
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
  status: string;
  github?: string;
  demo?: string;
  background?: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
}

const profileImage = profileImageSrc;

const developer = {
  name: 'Hang Senghong',
  title: 'Full Stack Developer',
  bio: 'Specialized in building scalable, high-performance applications with modern technologies. Passionate about clean code, system design, and creating exceptional user experiences.',
  socials: [
    // { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/hang-senghong-158674383' },
    { name: 'X', icon: '✘', url: 'https://x.com/Hongprogrammer' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' },
  ] as Social[],
};

const navLinks: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const techStack: Tech[] = [
  { name: 'Vue.js', icon: '💚', category: 'Frontend', level: 95 },
  { name: 'Nuxt.js', icon: '🟢', category: 'Framework', level: 95 },
  { name: 'TypeScript', icon: '📘', category: 'Language', level: 95 },
  { name: 'Firebase', icon: '🔥', category: 'Backend', level: 85 },
  { name: '.NET Core', icon: '🔷', category: 'Backend', level: 95 },
  { name: 'C#', icon: '💎', category: 'Language', level: 95 },
  { name: 'SQL Server', icon: '🗄️', category: 'Database', level: 90 },
  { name: 'Flutter', icon: '📱', category: 'Mobile', level: 50 },
  // { name: 'Azure', icon: '☁️', category: 'Cloud', level: 85 },
  { name: 'Docker', icon: '🐳', category: 'DevOps', level: 82 },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 85 },
  { name: 'MongoDB', icon: '🍃', category: 'Database', level: 80 },
  { name: 'Redis', icon: '🔴', category: 'Cache', level: 60 },
  // { name: 'GraphQL', icon: '🔺', category: 'API', level: 75 },
  { name: 'Node.js', icon: '🟩', category: 'Backend', level: 82 },
  { name: 'Git', icon: '🔀', category: 'Version Control', level: 92 },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'Ampere Electric calculation',
    description: 'Full features for using to manage electric in Sraschork pagoda',
    technologies: ['Nuxt & TS', 'Firebase', 'Tailwind', 'Cloudflare'],
    gradient: 'bg-linear-to-br from-blue-600 to-cyan-500',
    icon: '🔥',
    status: 'Production',
    github: 'https://github.com/Senghong-2025/Ampere',
    demo: 'https://ampere-sras-chork.pages.dev/',
    background: '/projects/ampere.png'
  },
  {
    id: 2,
    name: 'Transaction list manangement',
    description: 'Scalable messaging platform with real-time communication, file sharing, and video calls. Built using SignalR and Firebase for instant updates.',
    technologies: ['Nuxt & TS', 'Firebase', 'Tailwind', 'Cloudflare'],
    gradient: 'bg-linear-to-br from-purple-600 to-pink-500',
    icon: '💸',
    status: 'Production',
    github: 'https://github.com/Senghong-2025/tmr',
    demo: 'https://trm-7pr.pages.dev',
    background: '/projects/trm.jpg'
  },
  {
    id: 3,
    name: 'Invitaion website',
    description: 'Scalable for using to invite and avialable all events',
    technologies: ['Nuxt & TS','NestJS', 'Cloadinary', 'Firebase', 'Tailwind', 'Cloudflare'],
    gradient: 'bg-linear-to-br from-purple-600 to-pink-500',
    icon: '💸',
    status: 'Production',
    github: 'https://github.com/Senghong-2025/teab-ka',
    demo: 'https://havmk.pages.dev/home',
    background: '/projects/invite-web.png'
  },
  // {
  //   id: 3,
  //   name: 'E-Commerce Mobile App',
  //   description: 'Cross-platform shopping app with seamless payment integration, order tracking, and personalized recommendations using Flutter.',
  //   technologies: ['Flutter', 'Firebase', '.NET API', 'Stripe', 'PostgreSQL'],
  //   gradient: 'bg-linear-to-br from-green-600 to-teal-500',
  //   icon: '🛒',
  //   status: 'Production',
  //   github: '#',
  //   demo: '#',
  // },
  // {
  //   id: 4,
  //   name: 'Analytics Dashboard',
  //   description: 'Comprehensive business intelligence dashboard with real-time data visualization, custom reports, and predictive analytics.',
  //   technologies: ['Vue 3', 'C#', 'MongoDB', 'Chart.js', 'Docker'],
  //   gradient: 'bg-linear-to-br from-orange-600 to-red-500',
  //   icon: '📊',
  //   status: 'Beta',
  //   github: '#',
  //   demo: '#',
  // },
  // {
  //   id: 5,
  //   name: 'Healthcare Portal',
  //   description: 'HIPAA-compliant patient management system with appointment scheduling, telemedicine capabilities, and electronic health records.',
  //   technologies: ['.NET 6', 'Nuxt 3', 'SQL Server', 'Azure', 'SignalR'],
  //   gradient: 'bg-linear-to-br from-indigo-600 to-blue-500',
  //   icon: '⚕️',
  //   status: 'Production',
  //   github: '#',
  //   demo: '#',
  // },
  // {
  //   id: 6,
  //   name: 'DevOps CI/CD Pipeline',
  //   description: 'Automated deployment pipeline with containerization, monitoring, and auto-scaling capabilities for enterprise applications.',
  //   technologies: ['Docker', 'Azure DevOps', 'Kubernetes', 'Terraform', 'Grafana'],
  //   gradient: 'bg-linear-to-br from-gray-700 to-slate-600',
  //   icon: '⚙️',
  //   status: 'Active',
  //   github: '#',
  // },
];

const experience: Experience[] = [
  {
    id: 1,
    position: 'Full Stack Developer',
    company: 'Techbodia',
    location: 'Veal Sbov',
    period: '2023 - Present',
    description: 'Leading development of enterprise-scale applications using .NET Core and Vue.js. Architecting microservices, mentoring junior developers, and implementing best practices for code quality and performance optimization.',
    technologies: ['.NET Core', 'Vue.js', 'Nuxt.js', 'SQL Server', 'Docker', 'Tailwind CSS', 'Cypress', 'Jira'],
  },
  {
    id: 2,
    position: 'Flutter Developer (Start up)',
    company: 'Technovage Solution Co., Ltd',
    location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
    period: 'January, 2023 - April 2023',
    description: 'Developed and maintained multiple client-facing applications. Implemented RESTful APIs, database optimization, and responsive frontend interfaces. Collaborated with cross-functional teams in Agile environment.',
    technologies: ['Flutter', 'Laravel'],
  },
  {
    id: 3,
    position: 'QA',
    company: 'Technovage Solution Co., Ltd',
    location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
    period: 'January 2023 - April 2023',
    description: 'Testing Website, Mobile App, all platforms',
    technologies: [''],
  },
  {
    id: 4,
    position: 'Web development internship',
    company: 'Technovage Solution Co., Ltd',
    location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
    period: ' January 2021 - October, 2021',
    description: 'Support and maintenance SOP system',
    technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'Ajax', 'Bootstrap', 'CSS'],
  },
];

const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Software development',
    institution: 'Norton University',
    location: 'Phnom Penh, Cambodia',
    period: '2019 - 2023',
    description: 'Focused on software engineering, web development, and database management. Graduated with honors and completed a capstone project on building scalable web applications.',
    achievements: [
      'Dean\'s List for academic excellence',
      'Best Capstone Project Award',
      'Active member of the Computer Science Club',
    ],
    skills: ['Data Structures', 'Algorithms', 'Database Design', 'Software Engineering', 'Web Development'],
  },
  {
    id: 2,
    degree: 'High School',
    institution: 'Hunsen Sondek High School',
    location: 'Sondek, Bathey, Kompong Cham, Cambodia',
    period: '2016 - 2019',
    description: 'Completed secondary education with a focus on mathematics and science. Developed early interest in programming and technology.',
    skills: ['Mathematics', 'Physics'],
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* Option 1: Playful & Fun (Quicksand + Nunito) */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700;800;900&display=swap');

/* Option 2: Modern & Tech (Outfit + Inter) */
/* @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap'); */

/* Option 3: Bold & Geometric (Montserrat + Raleway) */
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Raleway:wght@300;400;500;600;700;800;900&display=swap'); */

/* Option 4: Friendly Rounded (Comfortaa + Work Sans) */
/* @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap'); */

/* Option 5: Ultra Modern (Manrope + DM Sans) */
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap'); */

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

/* To switch fonts, just uncomment one @import and update the font-family names below:

   Option 1 (Current - Playful): 'Nunito' body, 'Quicksand' headings
   Option 2 (Modern Tech): 'Inter' body, 'Outfit' headings
   Option 3 (Bold): 'Raleway' body, 'Montserrat' headings
   Option 4 (Rounded): 'Work Sans' body, 'Comfortaa' headings
   Option 5 (Ultra Modern): 'DM Sans' body, 'Manrope' headings
*/

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
