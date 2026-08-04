/**
 * Single source of truth for all portfolio content.
 * Editing this file updates every section of the site.
 */

export const profile = {
  name: "SUDA LAGUNADA VENKATA TRINESH",
  shortName: "Lagu",
  roleTitle: "Final-Year B.Tech in AI & ML · ML & Backend Engineer",
  roles: [
    "AI & Machine Learning Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "FastAPI & Python Specialist",
  ],
  tagline:
    "Final-year B.Tech in Artificial Intelligence & Machine Learning with production deployed projects spanning CNN-based detection, real-time healthcare platforms, and AI dynamic pricing systems.",
  summary:
    "Final-year B.Tech in Artificial Intelligence & Machine Learning with 2 production deployed projects spanning CNN-based plant disease detection, real-time SaaS collaboration platforms, and NLP-powered agricultural advisory systems. Proficient in Python, FastAPI, Node.js, PostgreSQL, and Docker. Targeting ML Engineering or Backend Engineering roles at product-focused teams building real-world AI systems.",
  email: "lagutrinesh@gmail.com",
  phone: "+91-9392477464",
  location: "Vadodara, India",
  github: "https://github.com/Lagu006",
  linkedin: "https://linkedin.com",
  leetcode: "https://leetcode.com",
  resumeUrl: "/resume.pdf",
};

export type NavTab =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "certifications"
  | "resume"
  | "contact"
  | "all";

export const navLinks: { id: NavTab; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "resume", label: "Resume", href: "#resume" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const aboutPoints = [
  "Final-year B.Tech in AI & ML at Parul University, Gujarat with strong analytical & coding skills.",
  "2 production-deployed AI systems covering CNN medical diagnostics and dynamic pricing.",
  "Proficient across Python, FastAPI, Node.js, Express, MySQL, MongoDB, and Docker.",
  "200+ LeetCode problems solved with focus on DSA, graph algorithms, and backend problem solving.",
  "Full-stack capabilities with React, TypeScript, Tailwind CSS, Angular.js, and RESTful APIs.",
  "Cloud & DevOps workflows using AWS (EC2, Lambda, S3), CI/CD, and GitHub Actions.",
];

export const stats = [
  { label: "LeetCode Solved", value: 200, suffix: "+" },
  { label: "Production Projects", value: 3, suffix: "+" },
  { label: "Tech Stack", value: 20, suffix: "+" },
  { label: "B.Tech CGPA", value: 6.55, suffix: "/10", decimals: 2 },
];

export type SkillGroup = {
  title: string;
  icon: string;
  skills: { name: string; level: number; icon: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Python", level: 94, icon: "SiPython" },
      { name: "JavaScript", level: 90, icon: "SiJavascript" },
      { name: "TypeScript", level: 86, icon: "SiTypescript" },
      { name: "Java", level: 80, icon: "SiOpenjdk" },
      { name: "SQL", level: 88, icon: "SiMysql" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "HTML", level: 95, icon: "SiHtml5" },
      { name: "CSS", level: 92, icon: "SiCss" },
      { name: "React", level: 90, icon: "SiReact" },
      { name: "Angular.js", level: 82, icon: "SiAngular" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88, icon: "SiNodedotjs" },
      { name: "Express.js", level: 85, icon: "SiExpress" },
      { name: "FastAPI", level: 90, icon: "SiFastapi" },
      { name: "RESTful APIs", level: 92, icon: "SiFlask" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", level: 88, icon: "SiMysql" },
      { name: "MongoDB", level: 86, icon: "SiMongodb" },
      { name: "PostgreSQL", level: 84, icon: "SiPostgresql" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "wrench",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 82, icon: "FaAws" },
      { name: "Docker", level: 85, icon: "SiDocker" },
      { name: "CI/CD & GitHub Actions", level: 86, icon: "SiGithubactions" },
      { name: "Git & GitHub", level: 92, icon: "SiGithub" },
    ],
  },
];

export const projects = [
  {
    title: "Kidney Stone Detection System",
    date: "March 27, 2026",
    role: "Frontend & Backend Developer",
    description:
      "Developed an AI-powered kidney stone detection system using Python, CNN models, and medical image analysis workflows.",
    features: [
      "AI-powered CNN deep learning model for medical image analysis",
      "Responsive UI/UX interface using HTML, CSS, and JavaScript for patient interaction",
      "Backend APIs, database integration, and server-side prediction pipeline using Flask & MySQL",
      "Secure real-time healthcare support and confidence scoring",
    ],
    tech: ["Python", "Flask", "CNN", "HTML", "CSS", "JavaScript", "MySQL"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Lagu006/KindeyStone-Detection",
        kind: "code" as const,
      },
      {
        label: "Live Demo",
        href: "https://github.com/Lagu006/KindeyStone-Detection",
        kind: "demo" as const,
      },
    ],
  },
  {
    title: "Trauma Detection & Doctor Connectivity System",
    date: "2026",
    role: "AI & Full Stack Engineer",
    description:
      "Developed an AI-powered healthcare platform capable of detecting trauma symptoms using text and voice-based analysis techniques.",
    features: [
      "Multimodal trauma symptom detection using voice and NLP text processing",
      "Real-time doctor connectivity and communication workflows for patient care",
      "Responsive UI/UX frontend developed with HTML, CSS, and JavaScript",
      "Robust backend API and database architecture with Flask and MySQL",
    ],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MySQL", "Voice Analysis"],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Lagu006/Lagu006-Detecting-Trauma-Symptoms-and-Connecting-Doctors-Using-Voice-and-Text-analysis-006",
        kind: "code" as const,
      },
      {
        label: "Live Demo",
        href: "https://github.com/Lagu006/Lagu006-Detecting-Trauma-Symptoms-and-Connecting-Doctors-Using-Voice-and-Text-analysis-006",
        kind: "demo" as const,
      },
    ],
  },
  {
    title: "Enterprise Dynamic Pricing Engine",
    date: "2026",
    role: "ML & Backend Engineer",
    description:
      "Developed an AI-powered dynamic pricing platform that automatically optimizes product pricing using demand forecasting, price elasticity analysis, and Q-Learning based reinforcement learning.",
    features: [
      "Hybrid forecasting engine combining Prophet and XGBoost models to predict product demand",
      "Q-Learning based reinforcement learning model for automated price optimization",
      "Scalable full-stack architecture with Next.js, React, FastAPI, MongoDB, Redis, and Docker",
      "Competitor intelligence pipelines, automated scheduling jobs, and profit-margin guardrails",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "MongoDB",
      "Redis",
      "Docker",
      "Prophet",
      "XGBoost",
      "Reinforcement Learning",
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/Lagu006",
        kind: "code" as const,
      },
      {
        label: "System Overview",
        href: "https://github.com/Lagu006",
        kind: "demo" as const,
      },
    ],
  },
];

export const experience = [
  {
    period: "2026 — Present",
    role: "Frontend & Backend Developer",
    org: "Kidney Stone Detection System",
    location: "Remote",
    kind: "AI Healthcare Platform",
    points: [
      "Developed an AI-powered kidney stone detection platform using Python, CNN models, and medical imaging workflows.",
      "Designed responsive UI/UX interfaces using HTML, CSS, and JavaScript to improve patient interaction and usability.",
      "Built backend APIs, database integration, and server-side functionalities for secure real-time healthcare support.",
    ],
  },
  {
    period: "2025 — 2026",
    role: "AI & Full Stack Developer",
    org: "Trauma Detection & Doctor Connectivity",
    location: "Remote / Academic",
    kind: "Healthcare AI",
    points: [
      "Built speech feature extraction and NLP pipelines to detect clinical trauma symptoms from patient voice and text.",
      "Implemented real-time doctor recommendation routing and secure consultation chat systems using Flask and MySQL.",
      "Engineered responsive patient onboarding and doctor dashboard portals.",
    ],
  },
];

export const education = [
  {
    period: "Jun 2023 — Present",
    degree: "B.Tech in Computer Science Engineering (AI & ML)",
    field: "Artificial Intelligence & Machine Learning",
    org: "Parul University, Gujarat, India",
    detail: "CGPA: 6.55 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning & Deep Learning",
      "FastAPI & RESTful APIs",
      "Database Systems (MySQL, MongoDB)",
      "Cloud & DevOps (Docker, AWS)",
      "Object-Oriented Programming (Java/Python)",
    ],
  },
];

export const certifications = [
  {
    title: "Microsoft – Power BI for Beginners",
    issuer: "Microsoft",
    date: "Mar 10, 2026",
    code: "Certificate Code: 9944571",
    description: "Certificate of Completion covering Data Analytics, Business Intelligence & Visualization.",
    url: "https://linkedin.com",
  },
  {
    title: "Tata – GenAI Powered Data Analytics",
    issuer: "Tata (Forage)",
    date: "March 2026",
    code: "Job Simulation",
    description: "Hands-on tasks in exploratory data analysis, risk profiling, AI prediction systems, and analytics workflows.",
    url: "https://linkedin.com",
  },
];

export const achievements = [
  {
    title: "200+ LeetCode Problems Solved",
    detail: "Extensive problem solving in DSA, Arrays, Trees, Graphs, DP, and Backend Algorithm logic.",
  },
  {
    title: "2+ Production AI Systems",
    detail: "Built and deployed CNN medical imaging systems and enterprise dynamic pricing engines.",
  },
  {
    title: "Cloud & DevOps Automation",
    detail: "Architected Docker container environments, AWS integrations, and CI/CD GitHub Actions pipelines.",
  },
  {
    title: "Tata & Microsoft Certified",
    detail: "Completed Tata GenAI Data Analytics simulation and verified Microsoft Power BI credentials.",
  },
];
