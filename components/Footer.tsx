"use client";

import { useEffect, useState } from "react";
import { FOOTER_DATA } from "@/data/portfolio";

export default function Footer() {
    const [time, setTime] = useState("");
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, index: number) => {
        if (url.startsWith("mailto:")) {
            const emailAddress = url.replace("mailto:", "");

            navigator.clipboard.writeText(emailAddress)
                .then(() => {
                    setCopiedIndex(index);
                    setTimeout(() => setCopiedIndex(null), 2000);
                })
                .catch((err) => console.error("Could not copy email text: ", err));
        }
    };

    return (
        <footer className="w-full border-t border-white/10 bg-[#121314] mt-auto font-mono text-[10px] uppercase tracking-widest text-[#A397B8]">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6">

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-white font-display font-bold">
                        <span>{FOOTER_DATA.name}</span>
                    </div>
                </div>

                <div className="flex items-center gap-6 border-t border-white/5 pt-4 md:border-none md:pt-0">
                    {FOOTER_DATA.socials.map((social, index) => {
                        const isEmail = social.url.startsWith("mailto:");
                        return (
                            <a
                                key={index}
                                href={social.url}
                                target={isEmail ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                onClick={(e) => handleLinkClick(e, social.url, index)}
                                className="hover:text-[#C4B3E6] hover:underline transition-colors duration-300 cursor-pointer"
                            >
                                {copiedIndex === index ? "COPIED!" : social.label}
                            </a>
                        );
                    })}
                </div>

            </div>
        </footer>
    );
}