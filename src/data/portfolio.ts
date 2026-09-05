export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  year?: string;
  shortDescription: string;
  thesis: string;
  technologies: string[];
  featured: boolean;
  priority: 1 | 2 | 3;
  links?: {
    github?: string;
    live?: string;
  };
  caseStudy?: {
    problem?: string;
    solution?: string;
    architecture?: string;
    impact?: string;
  };
  media?: {
    hero?: string;
    screenshots?: string[];
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: "Work" | "Education" | "Internship" | "Milestone";
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level?: string }[];
}

export const portfolioData = {
  name: "Aniket De",
  firstName: "Aniket",
  lastName: "De",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/Product Engineering",
  ],
  location: "Mangalore, India",
  status: "Available for new opportunities",
  headline: "SOFTWARE ENGINEER / AI",
  about:
    "I build software where product interfaces, backend systems and AI capabilities have to work as one system.",
  email: "aniketde66@gmail.com",
  socials: {
    github: "https://github.com/aniprogramer",
    linkedin: "https://www.linkedin.com/in/aniket-de-2a6166293/",
    instagram: "https://www.instagram.com/aniketde66/",
    resume: "/resume.pdf",
  },
  skills: [
    {
      name: "LANGUAGES",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "SQL" },
        { name: "C" },
      ],
    },
    {
      name: "FRONTEND / WEB",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
        { name: "EJS" },
      ],
    },
    {
      name: "BACKEND",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "FastAPI" },
      ],
    },
    {
      name: "DATABASES / ORM",
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Prisma ORM" },
      ],
    },
    {
      name: "DEVOPS / TOOLS",
      skills: [
        { name: "Docker" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab" },
        { name: "Maven" },
        { name: "Linux" },
      ],
    },
    {
      name: "AI / SYSTEMS",
      skills: [
        { name: "Google Gemini API" },
        { name: "Ollama" },
        { name: "WASM" },
        { name: "React Three Fiber" },
        { name: "Tree-sitter" },
        { name: "REST APIs" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      slug: "wanderlust",
      number: "01",
      title: "Wanderlust",
      category: "TRAVEL PLATFORM",
      year: "2026",
      shortDescription: "Full-stack travel accommodation platform.",
      thesis:
        "Developed a full-stack travel accommodation platform following MVC architecture with authentication, authorization, and CRUD operations.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "Passport.js",
        "Cloudinary",
        "Joi",
      ],
      featured: true,
      priority: 1,
    },
    {
      slug: "sentinel-agents",
      number: "02",
      title: "Sentinel Agents",
      category: "AI SECURITY TOOLING",
      shortDescription: "Security analysis engine.",
      thesis:
        "Autonomous AI-driven security platform for repository-wide vulnerability analysis using AST parsing and sandboxing.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "Docker",
        "Tree-sitter",
        "LLMs",
      ],
      featured: true,
      priority: 1,
    },
    {
      slug: "zerodha-clone",
      number: "03",
      title: "Zerodha Clone",
      category: "FINTECH / TRADING",
      year: "2026",
      shortDescription: "Full-stack stock trading platform.",
      thesis:
        "Developed a full-stack stock trading platform with secure authentication, portfolio management, and an interactive trading interface.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Passport.js",
      ],
      featured: true,
      priority: 1,
    },
    {
      slug: "antarsetu",
      number: "04",
      title: "AntarSetu",
      category: "REAL-TIME WEB APP",
      shortDescription: "Video conferencing platform.",
      thesis:
        "A video conferencing platform focused on real-time communication and a modern meeting experience.",
      technologies: ["WebRTC", "Node.js", "React.js", "Socket.IO"],
      featured: false,
      priority: 2,
    },
    {
      slug: "scriptbridge",
      number: "05",
      title: "ScriptBridge",
      category: "NLP / LANGUAGE PRESERVATION",
      shortDescription: "Tulu translation project.",
      thesis:
        "Applied NLP and machine translation for Tulu language preservation.",
      technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
      featured: false,
      priority: 2,
    },
  ] as Project[],
  experience: [
    {
      company: "Datavex AI",
      role: "SOFTWARE ENGINEERING INTERN",
      period: "2026",
      type: "Internship",
      description: [
        "Developed scalable full-stack features for an AI-powered engineering platform using Next.js, FastAPI, PostgreSQL, Docker, and REST APIs.",
        "Built interactive engineering workspaces supporting real-time code streaming and parameter management.",
        "Designed secure backend services with containerized deployment, persistent data management, and reusable APIs.",
      ],
    },
    {
      company: "Sahyadri College of Engineering and Management",
      role: "B.E. COMPUTER SCIENCE AND ENGINEERING",
      period: "2023",
      type: "Education",
      description: [
        "Pursuing a Bachelor's degree in Computer Science and Engineering with specialization in AI and ML.",
        "Participated in the GDG on Campus Solution Challenge and selected for SIH 2025.",
        "Secured Top 3 positions across 4 hackathons.",
      ],
    },
  ] as Experience[],
};
