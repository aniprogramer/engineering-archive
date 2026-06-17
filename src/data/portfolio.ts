export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  featured?: boolean;
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
  roles: ["Software Engineer", "Full Stack Web Developer", "Data Engineer"],
  location: "India",
  status: "Available for new opportunities",
  headline:
    "Building web applications, backend systems, and data-driven solutions.",
  about:
    "I am a software engineer focused on building robust systems and data-driven applications. My approach combines clean backend architecture with intuitive frontend experiences, treated with the precision of a digital craftsman.",
  email: "aniketde66@gmail.com",
  socials: {
    github: "https://github.com/aniprogramer",
    linkedin: "https://www.linkedin.com/in/aniket-de-2a6166293/",
    instagram: "https://instagram.com/aniketde66",
    resume: "/resume.pdf",
  },
  skills: [
    {
      name: "Languages",
      skills: [
        { name: "JavaScript" },
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "REST APIs" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "Three.js" },
      ],
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ],
    },
    {
      name: "Specialization",
      skills: [
        { name: "Software Engineering" },
        { name: "Backend Systems" },
        { name: "Database Design" },
        { name: "Data Engineering" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "DataStream Analytics",
      description:
        "A high-throughput data processing engine and visualization dashboard.",
      problem:
        "Traditional analytics tools struggled with real-time processing of diverse data streams from IoT devices.",
      solution:
        "Built a distributed processing layer using Node.js and optimized MySQL schemas for rapid ingestion and querying.",
      impact:
        "Reduced data latency by 60% and supported up to 10k events per second.",
      image:
        "https://images.unsplash.com/photo-1551288049-bbb653283b48?auto=format&fit=crop&q=80&w=1000",
      techStack: ["Node.js", "MySQL", "React", "D3.js"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
    },
    {
      title: "Architectural CRM",
      description:
        "A specialized CRM for engineering firms focused on project lifecycle management.",
      problem:
        "General-purpose CRMs lacked the hierarchical data structures needed for complex engineering projects.",
      solution:
        "Designed a relational database model in PostgreSQL that maps directly to engineering workflows.",
      impact:
        "Streamlined project tracking for a team of 50+ engineers, improving resource allocation efficiency.",
      image:
        "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1000",
      techStack: ["React", "Express.js", "PostgreSQL", "Tailwind"],
      githubLink: "#",
      liveLink: "#",
      featured: true,
    },
  ] as Project[],
  experience: [
    {
      company: "DATAVEX.ai",
      role: "Web Dev Intern",
      period: "2026 - Present",
      type: "Internship",
      description: [
        "Contributing to the development of an AI-powered CAD automation platform that converts 2D engineering drawings into 3D models, manufacturable CAD files, and CNC-ready G-code.",
        "Building and integrating frontend and backend features for internal engineering tools using modern web technologies.",
        "Collaborating with cross-functional teams to improve drawing processing workflows, system usability, and production efficiency.",
      ],
    },
    {
      company: "Sahyadri College of Engineering and Management, Mangalore",
      role: "B.E. Computer Science and Engineering",
      period: "2023 - Present",
      type: "Education",
      description: [
        "Pursuing a Bachelor's degree in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.",
        "Actively building projects in Full-Stack Development, Artificial Intelligence, and Computer Vision.",
        "Participating in hackathons, technical events, and collaborative software development projects.",
      ],
    },
    {
      company: "PM SHRI Kendriya Vidyalaya No. 1, Mangaluru Panambur",
      role: "Class XII (Science)",
      period: "2021 - 2023",
      type: "Education",
      description: [
        "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
        "Developed a strong foundation in analytical thinking and problem-solving.",
        "Explored programming and computer science concepts alongside academics.",
      ],
    },
    {
      company: "PM SHRI Kendriya Vidyalaya No. 1, Nausenabaugh, Visakhapatnam",
      role: "Class VI - XI",
      period: "2015 - 2021",
      type: "Education",
      description: [
        "Completed secondary schooling with consistent academic performance.",
        "Participated in extracurricular and technical activities.",
        "Developed an early interest in technology, engineering, and software development.",
      ],
    },
  ] as Experience[],
};
