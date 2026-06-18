"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("TRANSMISSION COMPILED SUCCESSFULLY.");
        setFormState({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <div className="w-full flex flex-col animate-fade-in overflow-visible text-white min-h-[700px]">
            <div className="border-b border-white/30 py-3 flex flex-col justify-start items-start font-mono text-sm  tracking-widest gap-2 pb-6">
                <h2 className="font-light text-[clamp(1.75rem,4vw,2.5rem)] tracking-[0.1em] leading-[1.2em] uppercase">
                    GET IN TOUCH
                </h2>
                <span className="opacity-60 font-sans font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </span>
            </div>

            {/* FORM CORE */}
            <form onSubmit={handleSubmit} className="pt-10">
                <div className="flex flex-col w-full font-mono text-sm uppercase rounded-[5px] bg-[#C4B3E6] px-10 py-10">

                    <div className="group relative w-full py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="name" className="text-black font-semibold tracking-wider shrink-0 sm:w-24">
                            NAME:
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="ENTER FULL IDENTITY..."
                            className="flex-1 bg-white border border-transparent focus:border-black/30 rounded-[5px] outline-none text-black placeholder-black/30 uppercase font-sans py-5 px-5 w-full transition-all duration-200"
                        />
                    </div>

                    <div className="group relative w-full py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="email" className="text-black font-semibold tracking-wider shrink-0 sm:w-24">
                            EMAIL:
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="ENTER ROUTING ADDRESS..."
                            className="flex-1 bg-white border border-transparent focus:border-black/30 font-sans py-5 px-5 border-none rounded-[5px] outline-none text-black placeholder-black/30 uppercase w-full transition-all duration-200"
                        />
                    </div>

                    <div className="group relative w-full py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 transition-colors duration-300">
                        <label htmlFor="message" className="text-black font-semibold tracking-wider shrink-0 sm:w-24 sm:pt-1">
                            MESSAGE:
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            placeholder="COMPILE BRIEF DETAILS OR INQUIRY OBJECTIVE..."
                            className="flex-1 bg-white border border-transparent focus:border-black/30 rounded-[5px] outline-none p-5 text-black placeholder-black/30 uppercase w-full resize-none min-h-[100px] leading-relaxed transition-all duration-200"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 pt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto border rounded-[5px] border-white text-white px-6 py-3.5 tracking-[0.2em] font-medium hover:bg-white hover:text-[#121314] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed uppercase shrink-0 outline-none transform-gpu"
                    >
                        {isSubmitting ? "Processing..." : "Message Sent!"}
                    </button>
                </div>
            </form>

        </div>
    );
}