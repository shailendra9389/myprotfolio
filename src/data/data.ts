import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Shailendra Pratap Singh",
  initials: "SP",
  url: "https://www.linkedin.com/in/sps54kh4/",
  location: "Punjab, UttarPradesh",
  locationLink: "https://www.google.com/maps/place/phagwara",
  description:
    "Full stack developer and machine learning enthusiast focused on building reliable, scalable web applications with strong performance and intelligent solutions.",
  summary:
    "I’m a software engineer and problem solver with two years of experience, building reliable and scalable systems used by hundreds of thousands of users. I hold a Bachelor’s degree in Computer Science and enjoy tackling complex challenges while continuously learning and improving.",
  avatarUrl: "/myimage.png",
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
      { name: "Vector Databases", icon: "lucide:database-zap" },
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
    category: "Machine Learning",
    skills: [
      { name: "Pandas", icon: "logos:pandas-icon" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Matplotlib", icon: "logos:matplotlib-icon" },
      { name: "Scikit-learn", icon: "logos:scikit-learn-icon" },
      { name: "Seaborn", icon: "logos:seaborn-icon" },
      { name: "ML Models", icon: "lucide:brain" },
      { name: "Selenium", icon: "logos:selenium" },
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
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event-driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      { name: "OOP", icon: "material-symbols:code" },
      { name: "TDD", icon: "lucide:flask-conical" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Power BI", icon: "logos:power-bi" },
      { name: "Excel", icon: "logos:microsoft-excel" },
      { name: "Sumo Logic", icon: "material-symbols:analytics" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://leetcode.com/u/ShailendraPratap9389/",
    icon: NotebookIcon,
    label: "Leetcode",
  },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+91 9389704171",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/shailendra9389",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sps54kh4/",
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
    company: "Intellimeta",
    href: "https://Intellimeta.com/",
    location: "Remote",
    title: "Software Engineer",
    logoUrl: "/intellimeta.png",
    start: "July 2025",
    end: "Jan 2026",
    description: [
      "Contributing to the development of 3D models for Digital Twin solutions, enhancing real-time visualization and interaction capabilities.",
      "Collaborating with cross-functional teams to design, develop, and optimize interactive 3D environments for digital twin applications.",
      "Gaining hands-on experience in remote software development workflows, using Git, and Blender, and version control systems",
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
      "CGPA 8.52/10",
      "Major in Computer Science",
      "Minor in Full Stack Web Development,Machine Learning",
      "Minor in UI/UX",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Formify AI",
    href: "https://github.com/shailendra9389/formify.ai",
    dates: "2026",
    active: true,
    description:
      "Designed an AI-powered form builder that increased form submission efficiency by 40%. Designed and implemented Formify AI, an advanced platform that enables users to create, deploy, and manage attractive forms with real-time analytics and improve data tracking by 25% for each submission.",
    detailedDescription: `Designed an AI-powered form builder that increased form submission efficiency by 40%. Designed and implemented Formify AI, an advanced platform that enables users to create, deploy, and manage attractive forms with real-time analytics and improve data tracking by 25% for each submission.`,
    keyFeatures: [
      "Integrated advanced analytics and implemented authentication & access-control features using Clerk, enabling secure usage tiers and improving platform reliability and user onboarding efficiency by 20%.",
      "Optimized user experience with dynamic form customization: engineered dynamic UI components for customizable form generation, enhancing user engagement and improving deployment efficiency for both individual users and businesses.",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Redux.js", icon: "logos:redux" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Clerk", icon: "simple-icons:clerk" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/formify.ai",
        icon: "github",
      },
      {
        type: "Demo",
        href: "https://www.linkedin.com/posts/sps54kh4_ai-formbuilder-reactjs-activity-7297236094721372160-aUfE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZz6swB2NB4Md7zsL9MzUb1FVl10JQtLx0",
        icon: "globe",
      },
    ],
    image: "/graphi.png",
    images: ["/job-portal.png"],
    video: "",
  },
  {
    title: "AI Carrer Coach Platform",
    href: "https://github.com/shailendra9389/carrer-coach",
    dates: "May 2025 – Jun 2025",
    active: true,
    description:
      "Designed an AI Career Coach using Next.js, Tailwind CSS, Shad CN UI, and Clerk, resulting in a 100% responsive UI and creating resumes, cover letters, prep materials and Industry Insights.",
    detailedDescription:
      "Designed an AI Career Coach using Next.js, Tailwind CSS, Shad CN UI, and Clerk, resulting in a 100% responsive UI and creating resumes, cover letters, prep materials and Industry Insights.",
    keyFeatures: [
      "Integrated Gemini API, improving learning efficiency by 35%, and automated personalized coaching workflows using Inngest, increasing document generation speed by 60%.",
      "Developed a scalable backend using Prisma ORM and PostgreSQL, optimizing query performance by 40% and enabling realtime analytics to track 5+ key learning metrics per user.",
    ],
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Prisma ORM", icon: "logos:prisma" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Clerk Auth", icon: "simple-icons:clerk" },
      { name: "Gemini API", icon: "simple-icons:googlegemini" },
      { name: "ShadCN UI", icon: "simple-icons:shadcnui" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/carrer-coach",
        icon: "github",
      },
    ],
    image: "/carrer.png",
    images: ["/carrer.png"],
    video: "",
  },
  {
    title: "Heart Stroke Predictor",
    href: "https://github.com/shailendra9389/Heart_stroke_predictor",
    dates: "May 2025 – Jun 2025",
    active: true,
    description:
      "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk.",
    detailedDescription:
      "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk. Applied feature engineering and feature scaling using StandardScaler to optimize data quality and improve model performance. Built and evaluated multiple machine learning models including Logistic Regression, Decision Tree, KNN, SVM, and Naive Bayes using accuracy and F1-score to select the best-performing model.",
    keyFeatures: [
      "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk.",
      "Applied feature engineering and feature scaling using StandardScaler to optimize data quality and improve model performance.",
      "Built and evaluated multiple machine learning models including Logistic Regression, Decision Tree, KNN, SVM, and Naive Bayes using accuracy and F1-score to select the best-performing model.",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "Pandas", icon: "logos:pandas" },
      { name: "Scikit-learn", icon: "logos:scikit-learn" },
      { name: "Matplotlib", icon: "logos:matplotlib" },
      { name: "Seaborn", icon: "logos:seaborn-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/Heart_stroke_predictor",
        icon: "github",
      },
    ],
    image: "/heart.png",
    images: ["/heart.png"],
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
    links: [],
    image: "/edu.png",
    images: ["/edu.png"],
    video: "",
  },
] as const;