import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-josefin)', 'sans-serif'],
        title: ['var(--font-cormorant)', 'serif'],
      },
      colors: {
        customTitle: '#EFD7CA',
        customHover: '#E3B8A1',
      },
    },
  },
  plugins: [],
};
export default config;
