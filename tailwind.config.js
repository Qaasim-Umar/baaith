/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat : ["Montserrat", "sans-serif"],
      prosto : ["Prosto One", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      
    },
    colors: {
      themeBlue: "#267A95",
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/assets/svg/underground.svg')",
        'facilities-background': "url('/assets/svg/facilities-background.svg')",
        'chooseus-background': "url('/assets/images/Rectangle.png')",
        'testimonial-background': "url('/assets/svg/testimonialBackground.svg')",
      },
    },
  },
  plugins: [],
};
