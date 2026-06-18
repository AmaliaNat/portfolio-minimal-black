export interface WorkItem {
    id: string;
    client: string;
    tagline: string;
    image: string;
    linkText: string;
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
        client: "KAOTIM | Car",
        tagline: "Renew in just a few clicks",
        image: "/images/samsung.gif",
        linkText: "Open AI",
    },
    {
        id: "02",
        client: "IMU UNIVERSITY",
        tagline: "",
        image: "/images/kaotim.gif",
        linkText: "Open AI",
    },
    {
        id: "03",
        client: "KAOTIM | Car",
        tagline: "Renew in just a few clicks",
        image: "/images/samsung.gif",
        linkText: "Open AI",
    },
    {
        id: "04",
        client: "IMU UNIVERSITY",
        tagline: "",
        image: "/images/samsung.gif",
        linkText: "Open AI",
    },
];

export const NAV_LINKS = ["PAST WORKS", "SKILLS", "CONTACT"] as const;

export const SKILLS_DATA: SkillItem[] = [
    { category: "Frontend", skills: ["Nextjs", "React"] },
    { category: "Frontend", skills: ["Nextjs", "React"] },
];

export const PROFILE_DATA: ProfileData = {
    name: "Amalia Natasha",
    tickerTags: ["FULL STACK DEVELOPER", "FRONTEND", "GOAT"],
    heroImage: {
        src: "/images/amalia-portrait.jpg",
        alt: "Amalia Natasha portrait",
    },
};

export const FOOTER_DATA: FOOTER_DATA = {
    name: "Amalia Natasha",
    tickerTags: ["FULL STACK DEVELOPER", "FRONTEND", "GOAT"],
    heroImage: {
        src: "/images/amalia-portrait.jpg",
        alt: "Amalia Natasha portrait",
    },
    socials: [
        { label: "GITHUB ↗", url: "https://github.com" },
        { label: "LINKEDIN ↗", url: "https://linkedin.com" },
        { label: "INSTAGRAM ↗", url: "https://instagram.com" },
    ],
};