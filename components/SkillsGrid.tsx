import { SKILLS_DATA } from '@/data/portfolio'


export default function SkillsGrid() {
    return (
        <div className="w-full flex flex-col animate-fade-in overflow-visible text-white min-h-[700px]">

            {/* Packaging Top Header Panel */}
            <div className="border-b-1 border-white/30  py-3 flex justify-between items-center font-MONO text-m uppercase tracking-widest mb-6">
                <h2 className="font-light  text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.2em]">
                    my skills
                </h2>
                <span className="opacity-60 font-sans">
                    QTY: {SKILLS_DATA.length}.00
                </span>
            </div>

            {/* THE LIST CONTAINER */}
            {SKILLS_DATA.map((skill, index) => (
                <div className='pb-10' key={index}>
                    <span className="font-sans text-m  uppercase tracking-wider opacity-50 shrink-0">
                        {skill.category}
                    </span>
                    <div className="group/grid flex flex-row w-full gap-2 mt-2">
                        {skill.skills.map((item, i) => (
                            <div
                                key={i}
                                className={`
                            relative w-max-[20%]   py-2 px-5
                             sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 select-none ${i % 2 === 0 ? "bg-white text-black" : "border-1 border-white/40 text-base"} rounded-[5px]
                            will-change-[filter,opacity] transform-gpu
                            transition-all duration-300 ease-out
                            opacity-100 [filter:blur(0px)]
                            group-hover/grid:opacity-30
                            group-hover/grid:[filter:blur(2px)]
                            hover:!opacity-100
                            hover:![filter:blur(0px)]
                        `}
                            >
                                <div className="flex items-baseline gap-3 flex-1 min-w-0">
                                    <h3 className="font-sans font-light   truncate">
                                        {item}
                                    </h3>
                                </div>

                            </div >
                        ))}
                    </div>
                </div>
            ))
            }

            {/* Packaging Bottom Footnotes */}
            <div className="mt-4 flex flex-col gap-1 font-mono text-[10px] uppercase tracking-wider opacity-40">
                <div className="flex justify-between">
                    <span>* IM WILLING TO LEARN</span>
                </div>
                <div className="border-t border-dashed border-white/30 mt-2 pt-2 text-center">
                    AND MORE INCOMING MAYBE
                </div>
            </div>

        </div >
    );
}