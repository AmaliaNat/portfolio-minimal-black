"use client";

import { SKILLS_DATA } from '@/data/portfolio';

export default function SkillsGrid() {
    return (
        <div className="w-full flex flex-col animate-fade-in overflow-visible text-white md:min-h-[700px]">

            {/* Packaging Top Header Panel */}
            <div className="border-b border-white/30 py-3 flex justify-between items-center font-mono text-sm uppercase tracking-widest mb-6">
                <h2 className="font-light text-[clamp(1.5rem,4vw,2.5rem)] tracking-[0.2em]">
                    my skills
                </h2>
                <span className="opacity-60 text-xs sm:text-sm">
                    QTY: {SKILLS_DATA.length}.00
                </span>
            </div>

            {/* THE LIST CONTAINER */}
            <div className="flex flex-col gap-6 md:gap-8">
                {SKILLS_DATA.map((skill, index) => (
                    <div className="flex flex-col w-full" key={index}>
                        <span className="font-sans text-xs sm:text-sm uppercase tracking-wider opacity-50 shrink-0 mb-3">
                            {skill.category}
                        </span>

                        {/* Mobile-First Layout Engine: Uses a dynamic wrapped layout system on mobile to 
                          prevent horizontal layout breaks, shifting cleanly to auto flex sizing on desktops.
                        */}
                        <div className="group/grid flex flex-wrap md:flex-row w-full gap-2.5">
                            {skill.skills.map((item, i) => (
                                <div
                                    key={i}
                                    className={`
                                        relative py-2.5 px-4 text-sm sm:text-base select-none rounded-[5px]
                                        flex items-center justify-between gap-2 transition-all duration-300 ease-out
                                        will-change-[filter,opacity] transform-gpu min-h-[40px]
                                        
                                        /* Fixing invalid widths using standard responsive max-width bounds */
                                        w-full sm:w-auto md:max-w-[25%] lg:max-w-[20%] shrink-0 grow-0
                                        
                                        ${i % 2 === 0
                                            ? "bg-white text-black"
                                            : "border border-white/40 text-white"
                                        }
                                        
                                        opacity-100 [filter:blur(0px)]
                                        
                                        /* Wrapped desktop hovers inside media-query defenses to fix touch devices */
                                        @media (hover: hover) {
                                            group-hover/grid:opacity-30
                                            group-hover/grid:[filter:blur(2px)]
                                            hover:!opacity-100
                                            hover:![filter:blur(0px)]
                                        }
                                    `}
                                >
                                    <div className="flex items-baseline gap-3 flex-1 min-w-0">
                                        <h3 className="font-sans font-light truncate">
                                            {item}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Packaging Bottom Footnotes */}
            <div className="mt-auto pt-8 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider opacity-40">
                <div className="flex justify-between">
                    <span>* IM WILLING TO LEARN</span>
                </div>
                <div className="border-t border-dashed border-white/30 mt-2 pt-2 text-center">
                    AND MORE INCOMING MAYBE
                </div>
            </div>

        </div>
    );
}