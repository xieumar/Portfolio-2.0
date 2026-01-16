import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Fredoka", "sans-serif"],
                body: ["Nunito", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "3xl": "2.5rem",
            },
            colors: {
                primary: "#8B5CF6",
                secondary: "#C084FC",
                accent: "#FBBF24",
                "background-light": "#F3F4F6",
                "background-dark": "#1F2937",
                "surface-light": "#FFFFFF",
                "surface-dark": "#374151",
                "sage-light": "#E2E8DE",
                "sage-dark": "#4A5D4F",
                "terracotta-light": "#FFE4D6",
                "terracotta-dark": "#9C6644",
                "lavender-deep": "#E0E7FF",
                "lavender-dark": "#4338CA",
                "pastel-blue": "#E0F2FE",
                "pastel-purple": "#F3E8FF",
                "pastel-pink": "#FCE7F3",
                "pastel-yellow": "#FEF3C7",
                "pastel-green": "#D1FAE5",
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out 1s infinite',
                'float-slow': 'float 8s ease-in-out 2s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
};

export default config;
