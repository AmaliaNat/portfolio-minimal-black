export interface WorkItem {
    id: string;
    client: string;
    tagline: string;
    image: string;
    linkText: string;
    overwiew: string;
    description: string;
    stacks: string[];
    role: string;
    cta?: {
        label: string;
        src: string;
    }
}

export interface SkillItem {
    category: string;
    skills: string[];
}

export interface ProfileData {
    name: string;
    tickerTags: string[];
    heroImage: {
        src: string;
        alt: string;
    };
}

export interface FOOTER_DATA {
    name: string;
    tickerTags: string[];
    heroImage: {
        src: string;
        alt: string;
    };
    socials: {
        label: string;
        url: string;
    }[];
}

export const WORK_ITEMS: WorkItem[] = [
    {
        id: "01",
        client: "KAOTIM", // Takaful Kaotim Digital Platform
        tagline: "Renew in just a few clicks",
        image: "/images/kaotim.gif",
        linkText: "View More",
        overwiew: "Developed and maintained the high-traffic digital ecosystem for Takaful's Kaotim platform, delivering responsive structures and efficient data management models.",
        description: "Built and compiled around dynamic content pipelines designed to optimize responsive interface rendering speeds, ensuring high availability and seamless cross-browser compatibility across multiple user environments.",
        role: "Website Developer",
        stacks: ["Next.js", "Strapi", "Node.js", "MySQL", "REST API"],
        cta: {
            label: "View the website",
            src: "https://www.kaotim.com", // Fallback production URL placeholder
        },
    },
    {
        id: "02",
        client: "IMU UNIVERSITY",
        tagline: "Optimized Navigation & Content Delivery",
        image: "/images/imu.gif",
        linkText: "View More",
        overwiew: "Revamped the WordPress platform architecture for International Medical University (IMU) to enhance core navigation channels and simplify overall backend administrative workflows.",
        description: "Revamped and maintained IMU’s digital platforms with a focus on responsive design, accessibility, and scalable content management. Built streamlined experiences for students, faculty, and prospective applicants using custom WordPress solutions.",
        role: "Website Developer",
        stacks: ["WordPress", "PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        cta: {
            label: "View the website",
            src: "https://www.imu.edu.my",
        },
    },
    {
        id: "03",
        client: "Samsung Odyssey",
        tagline: "Immersive Campaign Landing Interfaces",
        image: "/images/samsung.gif",
        linkText: "View More",
        overwiew: "Engineered high-performance, responsive web content layouts and scalable page structures to support traffic surges during major product launches and marketing campaigns.",
        description: "Developed promotional and campaign landing pages for Samsung, focused on responsive UI, performance, and conversion-driven user experiences across multiple product launches.",
        role: "Website Developer",
        stacks: ["Next.js", "React.js", "Tailwind", "JavaScript", "Figma"],
        cta: {
            label: "View the website",
            src: "https://www.samsung.com",
        },
    },
    {
        id: "04",
        client: "CelcomDigi (Cdlympics)",
        tagline: "High-Traffic Content Delivery Matrix",
        image: "/images/CDLYMPICS.gif",
        linkText: "View More",
        overwiew: "Built robust, responsive layouts and scalable database structures for CelcomDigi campaign platforms to support cross-functional marketing and high-user volume tasks.",
        description: "Built and compiled around dynamic content pipelines designed to optimize responsive interface rendering speeds, deploying interactive layouts that scale efficiently across modern screen boundaries.",
        role: "Website Developer",
        stacks: ["Next.js", "Strapi", "PHP", "Laravel", "MySQL"],
        cta: {
            label: "View the website",
            src: "https://www.celcomdigi.com",
        },
    },
];

export const NAV_LINKS = ["PAST WORKS", "SKILLS", "CONTACT"] as const;

export const SKILLS_DATA: SkillItem[] = [
    {
        category: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind", "Bootstrap", "JQuery"]
    },
    {
        category: "Backend & CMS Development",
        skills: ["Node.js", "Laravel", "WordPress", "PHP", "Java", "C++", "Kotlin", "REST API", "SOAP API"]
    },
    {
        category: "Database & Tools",
        skills: ["MySQL", "MongoDB", "Git", "Figma"]
    },
    {
        category: "Creative & Engineering Systems",
        skills: ["Blender", "Adobe Photoshop", "Adobe Premiere Pro", "Unity", "PowToon"]
    }
];

export const PROFILE_DATA: ProfileData = {
    name: "Amalia Natasha",
    tickerTags: ["WEBSITE DEVELOPER", "PROGRAMMER", "FRONTEND DEVELOPMENT", "BACKEND DEVELOPMENT"],
    heroImage: {
        src: "/images/amalia-portrait.jpg",
        alt: "Amalia Natasha portrait",
    },
};

export const FOOTER_DATA: FOOTER_DATA = {
    name: "Amalia Natasha",
    tickerTags: ["WEBSITE DEVELOPER", "PROGRAMMER", "FULL STACK ENGINE"],
    heroImage: {
        src: "/images/amalia-portrait.jpg",
        alt: "Amalia Natasha portrait",
    },
    socials: [
        { label: "GITHUB ↗", url: "https://github.com" },
        { label: "LINKEDIN ↗", url: "https://www.linkedin.com/in/amalia-natasha-binti-mohd-puat" },
        { label: "EMAIL ↗", url: "mailto:amaliantsha@gmail.com" }
    ],
};