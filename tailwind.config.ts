import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],       // Plus Jakarta Sans → font-sans
                display: ["var(--font-display)"], // Relife → font-display
                rigraf: ["var(--font-rigraf)"],   // DXRigraf → font-rigraf
            },
        },
    },
    plugins: [],
};

export default config;