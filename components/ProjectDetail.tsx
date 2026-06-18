"use client";

import { useEffect } from "react"; // 1. Added explicit hook import
import { WorkItem } from "@/data/portfolio";

interface ProjectDetailProps {
    project: WorkItem;
    onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {

    // 2. Clear scrolling position immediately when a project mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project.id]); // Re-runs layout snap seamlessly if the user swaps projects directly

    return (
        <div className="w-full min-h-screen bg-[#121314] text-white font-sans animate-fade-in overflow-y-auto pb-24">

            {/* 1. Header Navigation Context & Back Control */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 flex justify-between items-center">

                {/* STRUCTURAL BACK BUTTON */}
                <button
                    onClick={onClose}
                    type="button"
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A397B8] hover:text-white transition-colors duration-300 group cursor-pointer outline-none"
                >
                    <svg
                        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Projects
                </button>

            </div>

            {/* 2. Massive Brutalist Title */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
                <h1 className="font-display text-[clamp(2.5rem,7vw,7.5rem)] font-bold uppercase tracking-tight leading-[0.85] text-[#C4B3E6] select-none break-words">
                    {project.client}
                </h1>
            </div>

            {/* 3. Main 12-Column Layout Grid */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

                {/* LEFT COLUMN: Project Information & Specs (4 Columns) */}
                <div className="md:col-span-4 flex flex-col gap-10">

                    {/* Paragraph Blocks */}
                    <div className="flex flex-col gap-8 border-t border-[#A397B8]/20 pt-4">
                        <div className="flex flex-col gap-2">
                            <span className="font-rigraf text-[10px] tracking-[0.15em] uppercase text-[#A397B8]/60 font-semibold">
                                Overview & Summary
                            </span>
                            <p className="font-sans text-xs uppercase tracking-wide leading-relaxed text-white/90 text-justify">
                                {project.tagline || `${project.client} is an editorial design case study tracking interactive application layout systems.`}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="font-rigraf text-[10px] tracking-[0.15em] uppercase text-[#A397B8]/60 font-semibold">
                                Production Manifest
                            </span>
                            <p className="font-sans text-xs uppercase tracking-wide leading-relaxed text-white/60 text-justify">
                                Built and compiled around dynamic content pipelines designed to optimize responsive interface rendering speeds.
                            </p>
                        </div>
                    </div>

                    {/* Receipt-style Meta Information Matrix */}
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-3 py-3 border-t border-[#A397B8]/20 text-[11px] font-mono uppercase tracking-wider">
                            <span className="text-[#A397B8]/50 col-span-1">Index ID</span>
                            <span className="text-white col-span-2">{project.id}</span>
                        </div>

                        <div className="grid grid-cols-3 py-3 border-t border-[#A397B8]/20 text-[11px] font-mono uppercase tracking-wider">
                            <span className="text-[#A397B8]/50 col-span-1">Client</span>
                            <span className="text-white col-span-2 break-all">{project.client}</span>
                        </div>

                        <div className="grid grid-cols-3 py-3 border-t border-[#A397B8]/20 text-[11px] font-mono uppercase tracking-wider">
                            <span className="text-[#A397B8]/50 col-span-1">Action</span>
                            <span className="text-[#C4B3E6] col-span-2 font-bold underline cursor-pointer">
                                {project.linkText} ↗
                            </span>
                        </div>

                        <div className="border-t border-[#A397B8]/20 w-full" />
                    </div>

                </div>

                {/* RIGHT COLUMN: Media Assets Stack (8 Columns) */}
                <div className="md:col-span-8 flex flex-col gap-6">
                    <div className="w-full aspect-[16/9] bg-[#1a1b1e] rounded-md border border-white/10 overflow-hidden relative shadow-2xl">
                        <img
                            src={project.image}
                            alt={project.client}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Structural layout balancing space placeholders */}
                    <div className="w-full aspect-[16/9] bg-white rounded-md border border-white/10 overflow-hidden relative opacity-10">
                        <div className="absolute inset-0 flex items-center justify-center bg-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}