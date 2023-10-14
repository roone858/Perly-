import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 👇 Add CSS variables
        rubik: ["var(--font-rubik)"],
        playfair: ["var(--font-playfair)"],
       
      },
      colors: {
        "text-color": "var(--text-color)",
        "sub-text": "var(--secondary-color)",
        "red-color": "var(--red)",
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
