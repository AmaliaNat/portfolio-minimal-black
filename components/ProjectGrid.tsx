"use client";

import Image from "next/image";
import { WorkItem } from "@/data/portfolio";

interface ProjectGridProps {
    items: WorkItem[];
    onItemClick: (item: WorkItem) => void;
}

export default function ProjectGrid({ items, onItemClick }: ProjectGridProps) {
    return (
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {items.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => onItemClick(item)}
                    className="w-full text-left flex flex-col overflow-hidden group border border-transparent hover:border-[#342E42] transition-colors duration-300 cursor-pointer outline-none transform-gpu"
                >
                    <div className="relative w-full aspect-square overflow-hidden bg-[#1A1B1D]">
                        <Image
                            src={item.image}
                            alt={item.client}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 400px"
                            className="object-cover object-center mix-blend-screen opacity-80 group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    <div className="w-full py-3 flex justify-between items-baseline font-mono tracking-wider text-[#A397B8] border-t border-white/10 mt-[10px]">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-lg sm:text-xl">{item.id}</span>
                        </div>


                        <div className="flex flex-col items-end gap-1 text-right">
                            <span className="text-white opacity-90 uppercase font-semibold text-sm sm:text-base leading-none">
                                {item.client}
                            </span>
                            <span className="text-xs sm:text-sm opacity-50 group-hover:text-[#C4B3E6] transition-colors duration-300 flex items-center gap-1 leading-none">
                                <span>{item.linkText}</span>

                                <span className="inline-block select-none font-sans font-normal" style={{ fontVariantEmoji: "text" }}>
                                    {"↗\uFE0E"}
                                </span>
                            </span>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}