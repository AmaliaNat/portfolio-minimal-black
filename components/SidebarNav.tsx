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
        // Prevent hover tracking behavior logic on touch-capable monitors/devices
        if (window.matchMedia("(hover: none)").matches) return;

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

        <div className="w-full flex flex-col gap-4 pt-4 md:col-span-3 md:sticky md:top-8 md:pt-5 h-fit overflow-visible">
            <div className="relative w-full overflow-visible">
                <nav className="group/nav flex flex-col items-start md:items-center w-full overflow-x-auto overflow-y-hidden md:overflow-visible md:flex-col md:items-start md:gap-4 gap-2 scrollbar-none snap-x snap-mandatory">
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
                                    w-auto md:w-full text-left font-mono font-light uppercase 
                                    select-none overflow-visible transition-all duration-500 ease-out 
                                    py-0 px-1 md:px-0 md:py-1 block cursor-pointer snap-start
                                    will-change-[filter,opacity] transform-gpu outline-none min-h-[48px]
                                    
                                    /* Refined fluid responsive font scales protecting mobile viewport bounds */
                                    text-[clamp(1.5rem,5vw,2.25rem)] md:text-[clamp(2.5rem,4vw,4.5rem)] leading-none
                                    
                                    ${isCurrentActive
                                        ? "text-[#C4B3E6] opacity-100 [filter:blur(0px)]"
                                        : "text-[#A397B8] opacity-40 [filter:blur(2px)] md:[filter:blur(4px)]"
                                    }
                                    
                                    /* Media Query Wrappers safely isolating desktop styling from mobile hover stickiness */
                                    @media(hover:hover){
                                        group-hover/nav:opacity-40 
                                        group-hover/nav:[filter:blur(4px)]
                                        group-hover/nav:text-[#A397B8]
                                        hover:!opacity-100 
                                        hover:![filter:blur(0px)]
                                        hover:text-[#C4B3E6]
                                    }
                                `}
                            >
                                {link}
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Description layout block */}
            <p className="font-sans font-light text-xs sm:text-sm mt-4 md:mt-10 tracking-[0.1em] text-[#A397B8] opacity-80 max-w-prose md:max-w-none">
                All fun stuff, maybe if you read this, you would know that I dont know what to put here, maybe some long texts.
            </p>
        </div>
    );
}