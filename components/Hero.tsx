"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { PROFILE_DATA } from "@/data/portfolio";

interface HeroProps {
    show: boolean;
}

export default function Hero({ show }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!show) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power4.out", duration: 1.6 }
            });

            tl.to(".hero-split-text", {
                y: "0%",
                stagger: 0.1,
                delay: 0.2
            });

            gsap.to(tickerRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });

            tl.to(imageWrapperRef.current, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1.8,
                ease: "power4.inOut"
            }, "-=1.3");

            tl.fromTo(imageRef.current,
                { scale: 1.15 },
                { scale: 1, duration: 2.2, ease: "power3.out" },
                "-=1.8"
            );
        }, containerRef);

        return () => ctx.revert();
    }, [show]);

    const TickerSegment = () => (
        <div className="flex items-center gap-6 shrink-0 whitespace-nowrap pr-6">
            {PROFILE_DATA.tickerTags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-6">
                    <span>{tag}</span>
                    {(idx < PROFILE_DATA.tickerTags.length || idx === PROFILE_DATA.tickerTags.length - 1) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2D9F3] opacity-60 inline-block shrink-0 mx-1" />
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <section ref={containerRef} className="relative w-full bg-[#121314] text-[#E2D9F3] overflow-hidden select-none">
            <div className="w-full mx-auto py-8 md:py-12 flex flex-col gap-2">

                <div className="overflow-hidden w-full relative">
                    <div className="hero-split-text translate-y-[100%] will-change-transform font-sans font-light text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                        <div ref={tickerRef} className="flex w-max">
                            <TickerSegment />
                            <TickerSegment />
                            <TickerSegment />
                            <TickerSegment />
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#232427] sm:px-6 px-4 lg:px-8">
                    <h1 className="font-display text-[clamp(4rem,12vw,10rem)] text-primary font-normal tracking-tight leading-none uppercase flex flex-col">
                        <span className="overflow-hidden block leading-[185px]">
                            <span className="hero-split-text inline-block translate-y-[100%] will-change-transform leading-[122px]">
                                {PROFILE_DATA.name}
                            </span>
                        </span>
                    </h1>
                </div>

                <div
                    ref={imageWrapperRef}
                    style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                    className="relative w-full overflow-hidden rounded-sm bg-[#1A1B1D] will-change-[clip-path]"
                >
                    <div className="relative w-full aspect-[16/7] md:aspect-[21/7]">
                        <Image
                            ref={imageRef}
                            src={PROFILE_DATA.heroImage.src}
                            alt={PROFILE_DATA.heroImage.alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            className="object-cover object-center filter brightness-[0.85] will-change-transform"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}