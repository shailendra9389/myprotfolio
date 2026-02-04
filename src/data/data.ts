import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Manav Singh",
  initials: "MS",
  url: "https://www.linkedin.com/in/manavsinghman/",
  location: "Punjab, UttarPradesh",
  locationLink: "https://www.google.com/maps/place/phagwara",
  description:
    "Full stack developer and problem solver focused on building reliable web applications with strong performance and scalability.",
  summary:
    "I’m a software engineer and problem solver with two years of experience, building reliable and scalable systems used by hundreds of thousands of users. I hold a Bachelor’s degree in Computer Science and enjoy tackling complex challenges while continuously learning and improving.",
  avatarUrl: "/my.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Javascript", icon: "logos:javascript" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "ExpressJS", icon: "lucide:route" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "MongoDB", icon: "logos:aws-dynamodb" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Vector Databases", icon: "lucide:database-zap" },
      { name: "LangChain", icon: "lucide:link" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "CI/CD", icon: "material-symbols:sync" },
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Sentry", icon: "logos:sentry-icon" },
      { name: "New Relic", icon: "logos:new-relic-icon" },
      { name: "Grafana", icon: "logos:grafana" },
      {
        name: "Sumo Logic",
        icon: "material-symbols:analytics",
      },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://leetcode.com/u/manavsingh758/",
    icon: NotebookIcon,
    label: "Leetcode",
  },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+123456789",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/manavsingh345",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manavsinghman/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Searchashiyana",
    href: "https://searchashiyana.com/",
    location: "Remote",
    title: "Software Engineer",
    logoUrl:
      "https://searchashiyana.com/wp-content/uploads/2025/01/cropped-Search-Aashiana-Logo-Verticle-03-3.png",
    start: "Jul 2025",
    end: "Jun 2025",
    description: [
      "Worked on a content management system (CMS) focused on efficient data storage, retrieval, and organization for structured and unstructured content.",
      "Contributed to user and role management, enabling administrators to control access, permissions, and content visibility.",
      "Implemented features to track, update, and validate data entries, improving data accuracy and consistency across the system",
      "Gained hands-on experience in real-world data management workflows, version control, and collaborative development practices.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Lovely Professional University",
    href: "https://www.lpu.in/",
    degree: "Bachelor of Computer Science and Engineering",
    logoUrl: "/image.png",
    start: "Aug 2023",
    end: "Present",
    description: [
      "CGPA 7.68/10",
      "Major in Computer Science",
      "Minor in Full Stack Web Development",
      "Minor in UI/UX",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "GraphiDraw",
    href: "https://github.com/manavsingh345/GraphiDraw",
    dates: "2026",
    active: true,
    description:
      "A web-based collaborative whiteboard that allows users to draw, sketch, and visually organize ideas using a clean hand-drawn style. Built with a scalable project structure to support collaboration, performance, and future feature growth.",
    detailedDescription: `A web-based collaborative whiteboard that allows users to draw, sketch, and visually organize ideas using a clean hand-drawn style. Built with a scalable project structure to support collaboration, performance, and future feature growth.`,
    keyFeatures: [
      "Real-time collaboration allowing multiple users to draw and edit simultaneously",
      "Support for drawing and manipulating different shapes, lines, and freehand sketches",
      "Live cursor and canvas updates to reflect changes across all connected users",
      "User authentication and session-based access to shared boards",
      "Set up automated testing and CI pipelines for a monorepo-based Next.js application with real-time WebSocket features.",
    ],
    technologies: [
      { name: "NextJS", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "WebSocket", icon: "logos:websocket" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "MYSQL", icon: "logos:mysql-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/manavsingh345/GraphiDraw",
        icon: "github",
      },
    ],
    image: "/graphi.png",
    images: ["/job-portal.png"],
    video: "",
  },
  {
    title: "BrainBox – AI Visual and Knowledge Base",
    href: "https://github.com/manavsingh345/BrainBox",
    dates: "2025",
    active: true,
    description:
      "AI-powered knowledge management and chat application that lets users upload links(YouTube, articles, tweets, pdf etc.), ask questions, and build a personal second brain from conversations and external content.",
    detailedDescription: `BrainBox is an intelligent assistant designed to help users think, learn, and remember better. 
It allows users to chat with AI, upload links (YouTube, articles, tweets, etc.), and ask contextual questions 
based on those sources, turning scattered information into structured knowledge.`,
    keyFeatures: [
      "The system allows users to upload content through drag-and-drop functionality and paste operations for all types of files.",
      "The AI system processes information from various files and videos and websites to deliver answers through simple language.",
      "The system enables users to build Notion-style pages for creating detailed notes through its interface.",
      "The system uses automated organization to handle all tasks.",
      "Your AI-native workspace provides instant search functionality and chat capabilities for all stored content.",
    ],
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Typescript", icon: "logos:typescript-icon" },
      { name: "NodeJs", icon: "logos:nextjs-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Docker", icon: "logos:docker" },
      { name: "Redis", icon: "logos:redis" },
      { name: "LangChain", icon: "lucide:link" },
      { name: "BullMQ", icon: "logos:laravel" },
      { name: "MySQL", icon: "logos:sqlite" },
      { name: "Google Gemini API", icon: "simple-icons:googlegemini" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/manavsingh345/BrainBox",
        icon: "github",
      },
    ],
    image: "/brain.png",
    images: ["/brain.png"],
    video: "",
  },
  {
    title: "Varsity - Stock Trading Platform",
    href: "https://github.com/manavsingh345/Varsity",
    dates: "2025",
    active: true,
    description:
      "A modern and full-featured Trading Platform built with the MERN stack + Razorpay integration. This project replicates a complete online stock trading experience, including user authentication, dashboard analytics, live stock prices, order management, wallet system, and a support ticket system.",
    detailedDescription: `A modern and full-featured Trading Platform built with the MERN stack + Razorpay integration. This project replicates a complete online stock trading experience, including user authentication, dashboard analytics, live stock prices, order management, wallet system, and a support ticket system.`,
    keyFeatures: [
      "View user-specific Holdings, Positions, Orders",
      "Interactive data visualization and charts",
      "Wallet & Razorpay Integration",
      "Real-time updated Holdings & Positions fetched by user",
    ],
    technologies: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "React", icon: "logos:react" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "MongoDB", icon: "logos:aws-dynamodb" },
      { name: "Finhub API", icon: "simple-icons:googlegemini" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/manavsingh345/Varsity",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7350764539249897472/",
        icon: "globe",
      },
    ],
    image: "/stock.png",
    images: ["/stock.png"],
    video: "",
  },
  {
    title: "EduStack — Modern Learning Management System (LMS)",
    href: "https://github.com/manavsingh345/EduStack",
    dates: "2025",
    active: true,
    description:
      "EduStack is a modern LMS built with the MERN stack, Tailwind CSS, and Clerk for authentication. It features dynamic dashboards for educators and students, enabling efficient course management, content delivery, and interactive learning—all designed to streamline online education.",
    detailedDescription: `EduStack is a modern LMS built with the MERN stack, Tailwind CSS, and Clerk for authentication. It features dynamic dashboards for educators and students, enabling efficient course management, content delivery, and interactive learning—all designed to streamline online education.`,
    keyFeatures: [
      "Create, update, and manage courses with syllabus/resources, student monitoring, and performance analytics.",
      "Browse available courses, enroll easily, and access all course materials in one place.",
      "Leave ratings and reviews to share feedback and improve learning quality.",
      "Track personal profile details and learning progress seamlessly.",
    ],
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "ExpressJS", icon: "logos:express" },
      { name: "MongoDB", icon: "logos:aws-dynamodb" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Google Gemini API", icon: "simple-icons:googlegemini" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/manavsingh345/EduStack",
        icon: "github",
      },
    ],
    image: "/edu.png",
    images: ["/edu.png"],
    video: "",
  },
  {
    title: "Quick AI",
    href: "https://github.com/manavsingh345/QuickAi",
    dates: "2025",
    active: true,
    description:
      "An AI-powered platform designed for intelligent responses, offering fast processing, smart automation, and seamless integration across services. Built with a modern architecture featuring Docker, BullMQ, Valkey, and secure PDF upload & processing pipelines, the system ensures high performance, background job handling.",
    detailedDescription: `The platform supports secure PDF upload and AI-based processing, asynchronous job handling, and seamless service integration.`,
    keyFeatures: [
      "Secure PDF Upload & AI Processing",
      "AI Responses powered by Google Gemini",
      "Background Job Handling using BullMQ",
      "Queue-based Task Execution and Dockerized Architecture",
      "High-Speed Data Store with Valkey",
    ],
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "Typescript", icon: "logos:typescript-icon" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "BullMQ", icon: "lucide:database-zap" },
      { name: "Docker", icon: "logos:docker" },
      { name: "Google Gemini API", icon: "simple-icons:googlegemini" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/manavsingh345/QuickAi",
        icon: "github",
      },
    ],
    image: "/quick.png",
    images: ["/quick.png"],
    video: "",
  },
] as const;
