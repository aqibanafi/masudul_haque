/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#000046",
        
"secondary": "#131395",
        
"accent": "#8a8af9",
        
"neutral": "#161C22",
        
"base-100": "#F6F4F6",
        
"info": "#5DBDD5",
        
"success": "#24C2A2",
        
"warning": "#8B530E",
        
"error": "#E9254C",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}