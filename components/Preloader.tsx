"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
    onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const countRef = useRef<HTMLSpanElement>(null);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    document.body.style.overflow = "";
                    onComplete();
                }
            });

            tl.to(
                { value: 0 },
                {
                    value: 100,
                    duration: 2.2,
                    ease: "power4.out",
                    onUpdate: function () {
                        const current = Math.floor(this.targets()[0].value);
                        setPercent(current);
                    },
                }
            );

            tl.to(containerRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1.4,
                ease: "power4.inOut",
                delay: 0.2,
            });

            tl.to(
                ".preloader-item",
                {
                    y: -60,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: "power3.in",
                },
                "-=1.2"
            );
        });

        return () => {
            ctx.revert();
            document.body.style.overflow = "";
        };

        // FIX CHANGED HERE: Changed dependency array to empty [] 
        // This stops it from re-running when parent states flip
    }, []);

    return (
        <div
            ref={containerRef}
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            className="fixed inset-0 z-[9999] bg-[#121314] flex flex-col justify-between p-8 md:p-12 select-none will-change-[clip-path]"
        >
            <div className="preloader-item flex justify-between items-center w-full">
                <span className="font-rigraf text-xs uppercase tracking-[0.2em] text-[#A397B8] opacity-60">
                    [Full Stack Developer]
                </span>
                <span className="font-mono text-xs text-[#A397B8] opacity-40">
                    [INIT_SEQUENCE]
                </span>
            </div>

            <div className="preloader-item flex flex-col items-start max-w-sm">
                <h2 className="font-display text-2xl uppercase tracking-wider text-[#C4B3E6] mb-2">
                    Amalia Natasha
                </h2>
                <p className="font-sans text-xs text-[#A397B8] opacity-60 leading-relaxed">
                    Establishing dynamic layout vectors, pre-rendering graphic configurations, structural systems fully primed.
                </p>
            </div>

            <div className="preloader-item w-full flex justify-between items-end border-t border-[#232427] pt-6">
                <div className="font-rigraf text-[11px] uppercase tracking-widest text-[#A397B8] opacity-50 flex flex-col gap-1">
                    <span>Reexamining Human</span>
                    <span>All Rights Reserved 2026</span>
                </div>

                <div className="font-display text-[clamp(4rem,12vw,10rem)] leading-none font-bold text-[#E2D9F3] tracking-tighter tabular-nums">
                    <span ref={countRef}>{percent}</span>
                    <span className="text-[#C4B3E6] text-[clamp(1.5rem,4vw,3rem)] ml-1 font-sans font-light opacity-60">%</span>
                </div>
            </div>
        </div>
    );
}