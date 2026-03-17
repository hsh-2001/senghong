import type { NavLink, Social, Tech, Project, Experience, Education } from '~/models/portfolio';
import profileImageSrc from '~/assets/profiles/profile.png';

export const usePortfolioData = () => {
  const profileImage = profileImageSrc;

  const developer = {
    name: 'Hang Senghong',
    title: 'Full Stack Developer',
    bio: 'Specialized in building scalable, high-performance applications with modern technologies. Passionate about clean code, system design, and creating exceptional user experiences.',
    socials: [
      { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/hang-senghong-158674383' },
      { name: 'X', icon: 'x', url: 'https://x.com/Hongprogrammer' },
      { name: 'Telegram', icon: 'telegram', url: 'https://t.me/senghongH' },
      { name: 'Email', icon: 'email', url: 'mailto:senghonghang@gmail.com' },
    ] as Social[],
  };

  const navLinks: NavLink[] = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const techStack: Tech[] = [
    { name: 'Javascript', icon: '📘', category: 'Language', level: 95, image: '/programIcons/js.png' },
    { name: 'TypeScript', icon: '📘', category: 'Language', level: 95, image: '/programIcons/typescript.png' },
    { name: 'HTML', icon: '📘', category: 'Front-End', level: 95, image: '/programIcons/html.png' },
    { name: 'CSS', icon: '📘', category: 'Front-End', level: 95, image: '/programIcons/css.png' },
    { name: 'Vue.js', icon: '💚', category: 'Framework', level: 95, image: '/programIcons/vue.png' },
    { name: 'Nuxt.js', icon: '🟢', category: 'Framework', level: 95, image: '/programIcons/nuxt.png' },
    { name: 'React', icon: '🟢', category: 'Framework', level: 95, image: '/programIcons/reactjs.webp' },
    { name: 'Firebase', icon: '🔥', category: 'Database', level: 85, image: '/programIcons/fire.png' },
    { name: 'C#', icon: '💎', category: 'Language', level: 95, image: '/programIcons/c-sharp.png' },
    { name: '.NET Core', icon: '🔷', category: 'Backend', level: 95, image: '/programIcons/dotnet.png' },
    { name: 'SQL Server', icon: '🗄️', category: 'Database', level: 90, image: '/programIcons/sql-server.png' },
    // { name: 'Flutter', icon: '📱', category: 'Mobile', level: 50, image: '/programIcons/flutter.png' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', level: 85, image: '/programIcons/postgresql.png' },
    // { name: 'MongoDB', icon: '🍃', category: 'Database', level: 80, image: '/programIcons/mongodb.png' },
    // { name: 'Redis', icon: '🔴', category: 'Cache', level: 60, image: '/programIcons/redis.png' },
    { name: 'Node.js', icon: '🟩', category: 'Backend', level: 82, image: '/programIcons/node.png' },
    { name: 'Git', icon: '🔀', category: 'Version Control', level: 92, image: '/programIcons/git.png' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', level: 82, image: '/programIcons/docker.png' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      name: 'Ampere Electric calculation',
      description: 'Full features for using to manage electric in Sraschork pagoda',
      technologies: ['Nuxt & TS', 'Firebase', 'Tailwind', 'Cloudflare'],
      gradient: 'bg-linear-to-br from-blue-600 to-cyan-500',
      icon: '🔥',
      status: 'Live',
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
      status: 'Live',
      github: 'https://github.com/Senghong-2025/tmr',
      demo: 'https://trm-7pr.pages.dev',
      background: '/projects/trm.jpg'
    },
    {
      id: 3,
      name: 'Invitaion website',
      description: 'Scalable for using to invite and avialable all events',
      technologies: ['Nuxt & TS', 'NestJS', 'Cloudinary', 'Firebase', 'Tailwind', 'Cloudflare'],
      gradient: 'bg-linear-to-br from-purple-600 to-pink-500',
      icon: '💸',
      status: 'Live',
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
    },
    {
      "id": 6,
      "name": "Todo List CLI",
      "description": "A beautiful, fast, and lightweight command-line todo list manager built with Node.js. Features a rich terminal UI with colors, box-drawing characters, and intuitive commands for efficient task management.",
      "technologies": [
        "Javascript",
        "Node.Js"
      ],
      "gradient": "bg-linear-to-br from-blue-600 to-cyan-500",
      "icon": "📚",
      "status": "Local Setup",
      "github": "https://github.com/Senghong-CLIs/CLIs/tree/main/todo",
      "background": "/projects/todo-cli.png",
    },
    {
      "id": 7,
      "name": "HRMS System",
      "description": "A comprehensive Human Resource Management System (HRMS) built with Express.js, React, and PostgreSQL. Features employee management, attendance tracking, payroll processing, and performance evaluation modules.",
      "technologies": [
        "ExpressJs",
        "React",
        "Node.js",
        "PostgreSQL",
        "REST API"
      ],
      "gradient": "bg-linear-to-br from-green-600 to-blue-500",
      "icon": "🏢",
      "status": "Local Setup",
      "github": "https://github.com/hsh-2001/hrms",
      "demo": "https://hrms.senghong-learning.workers.dev",
      "background": "/projects/hrms.png",
    }
  ];

  const experience: Experience[] = [
    {
      id: 1,
      position: 'Full Stack Developer',
      company: 'Techbodia Co., Ltd',
      location: 'Chbar Ampov, Phnom Penh, Cambodia',
      period: 'July 2024 - Present',
      description: [
        "Specialized in frontend architecture using Vue.js and Nuxt.js, building responsive, high-quality user interfaces aligned with design specifications.",
        "Developed key features including reporting modules, user and permission management (AAA), theming, promotions, and payment systems.",
        "Worked with .NET and SQL Server for backend development, including database design, query optimization, and API integration.",
        "Integrated third-party APIs to enhance system functionality and improve user experience.",
        "Managed production releases, ensuring smooth deployment and stable performance in live environments.",
        "Provided ongoing support and troubleshooting, effectively resolving user issues.",
        "Leveraged QA experience to deliver maintainable, reliable, and high-quality code with minimal defects."
      ],
      technologies: ['.NET Core', 'Vue.js', 'Nuxt.js', 'SQL Server', 'Docker', 'Tailwind CSS', 'Cypress', 'Jira'],
    },
    {
      id: 2,
      position: 'QA Engineer',
      company: 'Techbodia Co., Ltd',
      location: 'Chbar Ampov, Phnom Penh, Cambodia',
      period: 'July 2023 - July 2024',
      description: [
        "Performed end-to-end testing of web applications to ensure functionality, usability, and performance.",
        "Created automated test scripts and strategies to minimize production bugs.",
        "Collaborated with developers to identify and resolve issues early, improving product quality."
      ],
      technologies: ['.NET Core', 'Vue.js', 'Nuxt.js', 'SQL Server', 'Docker', 'Tailwind CSS', 'Cypress', 'Jira'],
    },
    {
      id: 3,
      position: 'Flutter Developer (Start up)',
      company: 'Technovage Solution Co., Ltd',
      location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
      period: 'January, 2023 - April 2023',
      description: [
        'Developed and maintained multiple client-facing applications.',
        'Implemented RESTful APIs, database optimization, and responsive frontend interfaces.',
        'Collaborated with cross-functional teams in an Agile environment.',
      ],
      technologies: ['Flutter', 'Laravel'],
    },
    {
      id: 4,
      position: 'QA',
      company: 'Technovage Solution Co., Ltd',
      location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
      period: 'January 2023 - April 2023',
      description: [
        'Tested websites and mobile applications across platforms.',
      ],
      technologies: [''],
    },
    {
      id: 5,
      position: 'Web development internship',
      company: 'Technovage Solution Co., Ltd',
      location: 'Samrong Andet 2, Borey Piphup Thmey, 01 St.13, Phnom Penh ',
      period: ' January 2021 - October, 2021',
      description: [
        'Supported and maintained the SOP system.',
      ],
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
      achievements: [],
      skills: ['Data Structures', 'Algorithms', 'Database Design', 'Software Engineering', 'Web Development'],
    },
    {
      id: 2,
      degree: 'Self-Taught & Online Learning',
      institution: 'Online Platforms (YouTube, Google, Courses)',
      location: 'Remote',
      period: 'Everyday',
      description: 'Continuously learning through online tutorials, documentation, and courses. Improved practical skills by building real projects, exploring new technologies, and staying updated with industry trends.',
      achievements: ['Built multiple personal and freelance projects', 'Consistently updated skills with modern frameworks'],
      skills: ['JavaScript', 'TypeScript', 'Node.js', 'Vue/Nuxt', 'TailwindCSS', 'APIs', 'Cloud Deployment'],
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
