import type { NavLink, Social, Tech, Project, Experience, Education } from '~/models/portfolio';
import profileImageSrc from '~/assets/profiles/senghong.jpg';

export const usePortfolioData = () => {
  const profileImage = profileImageSrc;

  const developer = {
    name: 'Hang Senghong',
    title: 'Full Stack Developer',
    bio: 'Specialized in building scalable, high-performance applications with modern technologies. Passionate about clean code, system design, and creating exceptional user experiences.',
    socials: [
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
    { name: 'Docker', icon: '🐳', category: 'DevOps', level: 82 },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 85 },
    { name: 'MongoDB', icon: '🍃', category: 'Database', level: 80 },
    { name: 'Redis', icon: '🔴', category: 'Cache', level: 60 },
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
      technologies: ['Nuxt & TS','NestJS', 'Cloudinary', 'Firebase', 'Tailwind', 'Cloudflare'],
      gradient: 'bg-linear-to-br from-purple-600 to-pink-500',
      icon: '💸',
      status: 'Production',
      github: 'https://github.com/Senghong-2025/teab-ka',
      demo: 'https://havmk.pages.dev/home',
      background: '/projects/invite-web.png'
    },
    {
      "id": 4,
      "name": "Api Upload files",
      "description": "Lightweight API built with Hono for Cloudflare Workers, featuring GitHub and Cloudinary image uploads plus Telegram bot support.",
      "technologies": [
        "Hono",
        "Cloudflare Workers",
        "Wrangler",
        "TypeScript",
        "GitHub API",
        "Cloudinary",
        "Telegram API"
      ],
      "gradient": "bg-linear-to-br from-blue-600 to-cyan-500",
      "icon": "⚡",
      "status": "Live",
      "github": "https://github.com/Senghong-2025/first",
      "demo": "https://first.senghong-learning.workers.dev",
      "background": "/projects/upload.png",
    },
     {
      "id": 5,
      "name": "Programming tutorials",
      "description": "A collection of programming tutorials and code snippets for various technologies, aimed at helping developers learn and improve their skills.",
      "technologies": [
        "Vue 3",
        "VitePress",
        "GitHub Pages",
        "TypeScript",
      ],
      "gradient": "bg-linear-to-br from-blue-600 to-cyan-500",
      "icon": "📚",
      "status": "Live",
      "github": "https://github.com/rean-program/docs01",
      "demo": "https://rean-program.github.io/docs01/",
      "background": "/projects/rean-program.png",
    }
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
      degree: 'Self-Taught & Online Learning',
      institution: 'Online Platforms (YouTube, Google, Courses)',
      location: 'Remote',
      period: '2019 - Present',
      description: 'Continuously learning through online tutorials, documentation, and courses. Improved practical skills by building real projects, exploring new technologies, and staying updated with industry trends.',
      achievements: ['Built multiple personal and freelance projects', 'Consistently updated skills with modern frameworks'],
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'Vue/Nuxt', 'TailwindCSS', 'APIs', 'Cloud Deployment'],
    },
    {
      id: 2,
      degree: 'Bachelor of Software development',
      institution: 'Norton University',
      location: 'Phnom Penh, Cambodia',
      period: '2019 - 2023',
      description: 'Focused on software engineering, web development, and database management. Graduated with honors and completed a capstone project on building scalable web applications.',
      achievements: [],
      skills: ['Data Structures', 'Algorithms', 'Database Design', 'Software Engineering', 'Web Development'],
    },
    {
      id: 3,
      degree: 'High School',
      institution: 'Hunsen Sondek High School',
      location: 'Sondek, Bathey, Kompong Cham, Cambodia',
      period: '2016 - 2019',
      description: 'Completed secondary education with a focus on mathematics and science. Developed early interest in programming and technology.',
      skills: ['Mathematics', 'Physics'],
    },
    
  ];

  return {
    profileImage,
    developer,
    navLinks,
    techStack,
    projects,
    experience,
    education,
  };
};
