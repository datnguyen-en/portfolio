/**
 * Central content source for the portfolio.
 * Edit this file to update your personal details, projects, resume, etc.
 * Drop your own images into /public and reference them here (e.g. "/work/project.jpg").
 */

export const profile = {
  name: "Eric Nguyen",
  role: "A Software Engineer who loves to explore more about AI/ML infrastructures and Cloud Computing Services",
  tagline: "Backend, Cloud & Machine Learning",
  email: "thanhdat.2107.en@gmail.com",
  phone: "+1 (240) 750-2761",
  birthday: "Jul 21, 2006",
  location: "Amherst, Massachusetts, USA",
  avatar: "/avatar.jpg",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/datnguy/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/td._.2107/", icon: "instagram" },
    { label: "GitHub", href: "https://github.com/datnguyen-en", icon: "github" },
  ],
} as const;

/** Hero storytelling slides — each is a chapter shown over a shifting background. */
export type Slide = {
  kicker: string;
  title: string;
  description: string;
  /** A tailwind gradient used as the slide backdrop. Swap for an <img> via `image`. */
  gradient: string;
  image?: string;
};

export const slides: Slide[] = [
  {
    kicker: "AI / ML Infrastructure",
    title: "Models that keep learning.",
    description: "Adaptive ML pipelines that train, deploy, and improve on their own.",
    gradient: "from-indigo-700 via-slate-800 to-zinc-900",
    image: "/work/achievement-1.jpg",
  },
  {
    kicker: "Cloud & Infrastructure",
    title: "Designed for the cloud.",
    description: "Production workloads on AWS that scale and never sleep.",
    gradient: "from-amber-700 via-stone-800 to-neutral-900",
    image: "/work/achievement-2.jpg",
  },
  {
    kicker: "Backend Engineering",
    title: "Systems built to scale.",
    description: "Reliable services and APIs engineered for real-world load.",
    gradient: "from-teal-700 via-slate-800 to-zinc-900",
    image: "/work/achievement-3.jpg",
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  gradient: string;
  image?: string;
  details: string[];
};

export const projects: Project[] = [
  {
    id: "handflow",
    title: "Handflow - Smart Glasses For Productivity",
    category: "YHack Winner 2026",
    summary: "Python, TensorFlow, MediaPipe, OpenCV, AWS Lambda, Docker",
    stack: ["Python", "TensorFlow", "MediaPipe", "OpenCV", "AWS Lambda", "Docker"],
    gradient: "from-indigo-400 via-sky-300 to-fuchsia-300",
    image: "/work/adaptive-learning.jpg",
    details: [
      "Engineered a $5 smart AI glasses prototype using TensorFlow and MediaPipe, achieving 99.8% real-time gesture recognition accuracy for hands-free macro execution and virtual touchscreen interaction.",
      "Increased task productivity by 60% by replacing manual inputs with gesture macros, optimizing tracking stability via ArUco marker calibration under wearable camera constraints.",
    ],
  },
  {
    id: "ecovision",
    title: "EcoVision",
    category: "Societal Impact",
    summary: "Django, Python, Next.js, Docker, PostgreSQL, Tensorflow, WeatherAPI, AWS ECS/Fargate",
    stack: ["Django", "Python", "Next.js", "Docker", "PostgreSQL", "Tensorflow", "AWS", "API calling"],
    gradient: "from-violet-400 via-purple-300 to-sky-300",
    image: "/work/studyhub.jpg",
    details: [
      "Developed and trained a Neural Network model to predict Air Quality Index (AQI) using key environmental factors (PM2.5, Ozone, NO₂).",
      "Integrated the OpenWeather Air Pollution API for real-time AQI and pollutant data updates.",
      "Implemented data cleaning, feature selection, and model evaluation pipelines to maximize prediction accuracy.",
      "Achieved 95% accuracy on real-world AQI datasets after one month of iterative training.",
    ],
  },
  {
    id: "dailytracker",
    title: "Daily Tracker",
    category: "Productivity/Education",
    summary: "Next,js, AWS Amplify, PostgreSql, AWS Aurora, Docker, Redis, Airflow",
    stack: ["Next.js", "PostgreSQL", "AWS", "Redis", "Airflow", "Docker"],
    gradient: "from-amber-300 via-yellow-200 to-neutral-300",
    image: "/work/ecommerce.jpg",
    details: [
      "A complete MERN-stack storefront with cart, checkout, and order history.",
      "JWT-based authentication and role-based admin dashboards.",
      "RESTful API with pagination, search, and product filtering.",
    ],
  },
  {
    id: "blog-post",
    title: "Blog Post",
    category: "Full Stack — Online Social Platform",
    summary: "MongoDB, Spring Boot, and ReactJS",
    stack: ["MongoDB", "Spring Boot", "React"],
    gradient: "from-stone-300 via-neutral-200 to-zinc-300",
    image: "/work/blog.jpg",
    details: [
      "A social blogging platform with following, likes, and comment threads.",
      "Spring Boot service layer backed by MongoDB for flexible content models.",
      "Optimistic UI updates for a snappy social feed experience.",
    ],
  },
];

export type WhatIDo = {
  title: string;
  description: string;
  icon: string;
};

export const whatIDo: WhatIDo[] = [
  {
    title: "Algorithms & Data Structures",
    description: "The most modern and high-quality algorithms made at a professional level.",
    icon: "binary",
  },
  {
    title: "Backend Development",
    description: "High-quality development of services and APIs at the professional level.",
    icon: "server",
  },
  {
    title: "Cloud Computing",
    description: "Professional development of applications with cloud services.",
    icon: "cloud",
  },
  {
    title: "Machine Learning",
    description: "Data preprocessing, model training, and continuous deployment.",
    icon: "brain",
  },
];

export const skills = [
  { name: "Cloud Computing", level: 80 },
  { name: "Machine Learning", level: 70 },
  { name: "Backend Development", level: 90 },
  { name: "Algorithms & Data Structures", level: 85 },
];

export const aboutText = [
  "As a senior pursuing a dual degree in Mathematics and Computer Science, I am honored to be a recipient of the Chancellor Award Scholarship.",
  "My academic journey has been complemented by hands-on experience in Backend Development, Cloud Computing, Infrastructure management, and ML. With a passion for solving complex problems and a strong foundation in both theory and practice, I am eager to contribute my skills to innovative projects and dynamic teams.",
];

export type TimelineItem = {
  title: string;
  subtitle?: string;
  period: string;
  /** Optional logo image in /public. Falls back to a monogram if missing. */
  logo?: string;
  /** Optional accent for the monogram tile, e.g. "from-sky-500 to-indigo-600". */
  tint?: string;
  lines: string[];
};

export const education: TimelineItem[] = [
  {
    title: "University of Massachusetts — Amherst",
    subtitle: "B.S. in Computer Science & Mathematics",
    period: "Sep 2024 — May 2027",
    logo: "/logos/umass.svg",
    tint: "from-rose-500 to-red-700",
    lines: [
      "GPA: 4.0 / 4.0 · Dean's List 24, 25, 26",
      "Dean's International Scholar · Chancellor's Award",
      "Dean's Recommendation for Leadership & Impact",
      "YHack Winner 2026",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Commonwealth of Massachusetts",
    subtitle: "Software Engineer Intern",
    period: "Jan 2026 — Aug 2026",
    logo: "/logos/commonwealth.svg",
    tint: "from-blue-500 to-blue-800",
    lines: [],
  },
  {
    title: "Tuturuuu",
    subtitle: "Software Engineer Intern",
    period: "May 2025 — Aug 2025",
    logo: "/logos/tuturuuu.svg",
    tint: "from-emerald-500 to-teal-700",
    lines: [],
  },
  {
    title: "Leeguard",
    subtitle: "Founding Software Engineer",
    period: "May 2025 — Present",
    logo: "/logos/leeguard.svg",
    tint: "from-amber-500 to-orange-600",
    lines: [],
  },
  {
    title: "UMass Data Science",
    subtitle: "Software Research Student",
    period: "Sep 2024 — May 2025",
    logo: "/logos/umass.svg",
    tint: "from-violet-500 to-purple-700",
    lines: [],
  },
];

export type Recommendation = {
  name: string;
  quote: string;
  avatar: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Laura Haas - Former Dean of CICS, UMass Amherst",
    quote: "I had a wonderful experience working with Eric as part of the Manning Undergraduate Student Impact Committee (MUSIC!). As part of the Intellectual Curiosity subcommittee, Eric was part of a team that explored ways to bring students more into the intellectual life of the college, e.g., attending seminars, engaging with faculty, and seeking out other opportunities beyond the classroom. Towards the end of the year, they produced the Intellectual Curiosity Challenge. Students participating in 5 activities that demonstrated curiosity and engagement in our field could earn a certificate of curiosity.  I hope that in future years, this wonderful challenge can run every semester, inspiring students and exposing them to all the riches of our Manning College environment. Eric brought a lot of enthusiasm to MUSIC, showing up regularly at meetings, brainstorming with the team, actively leading discussions and ultimately, opening students’ eyes to the myriad of ways they could engage and learn outside the classroom. I would be delighted to work with Eric again. He demonstrated teamwork, creativity, responsibility and leadership.",
    avatar: "/testimonials/linh.jpg",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;


