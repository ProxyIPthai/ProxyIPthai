/** @type {import('tailwindcss').Config} */
export default {
 
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '80%', // This sets the max-width of prose elements
            // Other custom styles
          },
        },
      }),
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
]
}