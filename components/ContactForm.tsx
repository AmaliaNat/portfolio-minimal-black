"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormState({ name: "", email: "", message: "" });

                setTimeout(() => setIsSuccess(false), 4000);
            } else {
                alert("TRANSMISSION FAILURE. PLEASE TRY AGAIN.");
            }
        } catch (error) {
            console.error(error);
            alert("NETWORK ERROR. DETAILED ENGINE EXCEPTION.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full flex flex-col animate-fade-in overflow-visible text-white md:min-h-[700px]">
            <div className="border-b border-white/30 py-3 flex flex-col justify-start items-start font-mono text-sm tracking-widest gap-2 pb-6">
                <h2 className="font-light text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.1em] leading-tight uppercase">
                    GET IN TOUCH
                </h2>
                <span className="opacity-60 font-sans font-light text-xs sm:text-sm max-w-prose">
                    Send a direct dispatch to compile project requests or design inquiries.
                </span>
            </div>

            {/* FORM CORE */}
            <form onSubmit={handleSubmit} className="pt-6 md:pt-10">
                <div className="flex flex-col w-full font-mono  rounded-[5px] bg-[#C4B3E6] px-4 py-6 sm:p-8 md:p-10 gap-2 md:gap-0">

                    <div className="group relative w-full py-2 md:py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="name" className="text-black font-semibold tracking-wider shrink-0 sm:w-24 min-h-[24px] flex items-center text-xs md:text-sm">
                            NAME:
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Enter Your Name"
                            className="flex-1 bg-white border border-transparent focus:border-black/30 rounded-[5px] outline-none text-black placeholder-black/30  font-sans py-4 px-4 md:py-5 md:px-5 text-base md:text-sm w-full transition-all duration-200 min-h-[48px]"
                        />
                    </div>

                    {/* Email Input Block */}
                    <div className="group relative w-full py-2 md:py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="email" className="text-black font-semibold tracking-wider shrink-0 sm:w-24 min-h-[24px] flex items-center text-xs md:text-sm">
                            EMAIL:
                        </label>
                        <input
                            id="email"
                            type="type"
                            inputMode="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="Enter Your Email..."
                            className="flex-1 bg-white border border-transparent focus:border-black/30 font-sans py-4 px-4 md:py-5 md:px-5 rounded-[5px] outline-none text-black placeholder-black/30  text-base md:text-sm w-full transition-all duration-200 min-h-[48px]"
                        />
                    </div>

                    {/* Message Input Block */}
                    <div className="group relative w-full py-2 md:py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="message" className="text-black font-semibold tracking-wider shrink-0 sm:w-24 min-h-[24px] flex items-center text-xs md:text-sm sm:pt-1">
                            MESSAGE:
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            placeholder="Enter Your Message..."
                            className="flex-1 bg-white border border-transparent focus:border-black/30 rounded-[5px] outline-none p-4 md:p-5 text-black placeholder-black/30  text-base md:text-sm w-full resize-none min-h-[120px] leading-relaxed transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Submissions & Actions Container */}
                <div className="w-full flex flex-col-reverse sm:flex-row justify-end items-stretch sm:items-center gap-4 pt-6">
                    {isSuccess && (
                        <p className="font-mono text-xs  tracking-[0.15em] text-[#C4B3E6] animate-fade-in py-2 text-center sm:text-left">
                            ✓ Message Sent.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto border rounded-[5px] border-white text-white px-6 py-4 tracking-[0.2em] font-medium active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed uppercase shrink-0 outline-none transform-gpu min-h-[48px] text-sm
                            /* Shielding native hover mechanics from mobile sticky touch behaviors */
                            @media (hover: hover) {
                                hover:bg-white
                                hover:text-[#121314]
                            }
                        "
                    >
                        {isSubmitting ? "Processing..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
}