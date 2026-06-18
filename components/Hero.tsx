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
        <div className="flex items-center gap-6 shrink-0 whitespace-nowrap pr-6 py-3 select-none touch-none">
            {PROFILE_DATA.tickerTags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-6">
                    <span className="text-xs md:text-sm uppercase tracking-[0.2em]">
                        {tag}
                    </span>
                    {(idx < PROFILE_DATA.tickerTags.length || idx === PROFILE_DATA.tickerTags.length - 1) && (
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-[#E2D9F3] opacity-60 inline-block shrink-0 mx-1"
                            aria-hidden="true"
                        />
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-[#121314] text-[#E2D9F3] overflow-hidden select-none 2xl:max-w-screen-2xl 2xl:mx-auto"
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-6 md:py-12 flex flex-col gap-4 md:gap-6 2xl:gap-8">

                {/* Ticker Row */}
                <div className="overflow-hidden w-full relative">
                    <div className="hero-split-text translate-y-[100%] will-change-transform font-sans font-light opacity-80">
                        <div ref={tickerRef} className="flex w-max">
                            <TickerSegment />
                            <TickerSegment />
                            <TickerSegment />
                            <TickerSegment />
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#232427] pt-2 md:pt-4">
                    <h1 className="font-display text-[clamp(2.75rem,9vw,8.5rem)] text-primary font-normal tracking-tight uppercase flex flex-col">
                        <span className="overflow-hidden block py-1 md:py-2">
                            <span className="hero-split-text inline-block translate-y-[100%] will-change-transform leading-[0.9]">
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
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/7] xl:aspect-[21/6] 2xl:aspect-[32/9]">
                        <Image
                            ref={imageRef}
                            src={PROFILE_DATA.heroImage.src}
                            alt={PROFILE_DATA.heroImage.alt}
                            fill
                            priority
                            sizes="(max-width: 1536px) 100vw, 1536px"
                            className="object-cover object-center filter brightness-[0.85] will-change-transform"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}