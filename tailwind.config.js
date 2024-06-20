/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollPadding: {
        'top-16': '10rem', // Passe diesen Wert an die Höhe deiner Navbar an
      }
    },
  },
  plugins: [],
}
