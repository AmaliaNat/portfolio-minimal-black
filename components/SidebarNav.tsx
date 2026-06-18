"use client";

import { useRef, useEffect } from "react";

interface SidebarNavProps {
    links: readonly string[];
    activeSection: string;
    onSectionChange: (section: string) => void;
}

export default function SidebarNav({ links, activeSection, onSectionChange }: SidebarNavProps) {
    const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

    useEffect(() => {
        if (links && links.length > 0) {
            const hasValidActiveSection = links.some(
                (link) => link.toUpperCase() === activeSection?.toUpperCase()
            );

            if (!hasValidActiveSection) {
                onSectionChange(links[0]);
            }
        }
    }, [links, activeSection, onSectionChange]);

    useEffect(() => {
        const currents = timeoutRefs.current;
        return () => {
            Object.values(currents).forEach(clearTimeout);
        };
    }, []);

    const handleMouseEnter = (link: string) => {
        if (timeoutRefs.current[link]) {
            clearTimeout(timeoutRefs.current[link]);
        }

        timeoutRefs.current[link] = setTimeout(() => {
            onSectionChange(link);
        }, 300);
    };

    const handleMouseLeave = (link: string) => {
        if (timeoutRefs.current[link]) {
            clearTimeout(timeoutRefs.current[link]);
            delete timeoutRefs.current[link];
        }
    };

    return (
        <div className="md:col-span-3 flex flex-col gap-2 md:sticky pt-5 h-fit">
            <div className="relative overflow-visible">
                <nav className="group/nav flex flex-col items-start w-full overflow-visible gap-5">
                    {links.map((link) => {
                        const isCurrentActive = activeSection.toUpperCase() === link.toUpperCase();

                        return (
                            <button
                                key={link}
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (timeoutRefs.current[link]) clearTimeout(timeoutRefs.current[link]);
                                    onSectionChange(link);
                                }}
                                onMouseEnter={() => handleMouseEnter(link)}
                                onMouseLeave={() => handleMouseLeave(link)}
                                className={`
                                  w-full text-left font-mono font-light text-[clamp(2.5rem,6vw,5rem)] leading-none uppercase 
                                  select-none overflow-visible transition-all duration-500 ease-out py-1 block cursor-pointer
                                  will-change-[filter,opacity] transform-gpu outline-none ${isCurrentActive
                                        ? "text-[#C4B3E6] opacity-100 [filter:blur(0px)]"
                                        : "text-[#A397B8] opacity-40 [filter:blur(4px)]"
                                    }
                                  group-hover/nav:opacity-40 
                                  group-hover/nav:[filter:blur(4px)]
                                  group-hover/nav:text-[#A397B8]
                                  hover:!opacity-100 
                                  hover:![filter:blur(0px)]
                                  hover:text-[#C4B3E6]
                                `}
                            >
                                {link}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Fine print copy layout block */}
            <p className="font-sans font-light text-m md:text-sm mt-10 tracking-[0.1em] text-[#A397B8] opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
    );
}