import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                // Legacy tokens for cleansy page components
                rating: "#FFAD31",
                "link-hover": "hsl(168 76% 42%)",
            },
            fontFamily: {
                sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
                display: ["Sora", "Inter", "system-ui", "sans-serif"],
            },
            fontSize: {
                h1: ["46px", { lineHeight: "1.2", fontWeight: "800" }],
                h2: ["46px", { lineHeight: "1.2", fontWeight: "800" }],
                h3: ["32px", { lineHeight: "1.2", fontWeight: "800" }],
                h4: ["26px", { lineHeight: "1.2", fontWeight: "800" }],
                h5: ["14px", { lineHeight: "1.4", fontWeight: "800" }],
                h6: ["14px", { lineHeight: "1.4", fontWeight: "800" }],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.95)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out forwards",
                "slide-in-left": "slide-in-left 0.5s ease-out forwards",
                "scale-in": "scale-in 0.4s ease-out forwards",
            },
        },
    },
    plugins: [],
};

export default config;
