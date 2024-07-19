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
      fontSize: {
        '17px' : '1.063rem',
        '20px' : '1.3rem',
        '25px' : '1.5625rem',
        '30px' : '1.875rem',
        '45px' : '2.813rem',
      },
      colors: {
        customFont: '#EFD7CA',
        customTitle: '#D7AE9F',
        customHover: '#E3B8A1',
        borderColor: '#707070',
        line: '#FCD3BB',
      },
      lineHeight: {
        '22px' : '22px',
        '31px' : '31px',
      },
    },
  },
  plugins: [],
};
export default config;
