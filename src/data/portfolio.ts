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
      company: "Engineering Solutions Ltd.",
      role: "Backend Intern",
      period: "2023 - 2024",
      type: "Internship",
      description: [
        "Optimized database queries for a legacy Java system, improving response times by 30%.",
        "Assisted in the migration of monolithic services to microservices using Node.js.",
        "Documented system architecture and API endpoints for the engineering team.",
      ],
    },
    {
      company: "Tech University",
      role: "B.Tech in Computer Science",
      period: "2020 - 2024",
      type: "Education",
      description: [
        "Specialized in Software Engineering and Database Management Systems.",
        "Led the university web development club, organizing 10+ hackathons.",
        "Graduated with honors in technical excellence.",
      ],
    },
  ] as Experience[],
};
