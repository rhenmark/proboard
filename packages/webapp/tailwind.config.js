const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,app,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#163121",
        secondary: "#55B97E",
        dark: "#040406"
      }
    },
    fontFamily: {
      display: ["Poppins"],
      body: ['"Poppins"'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
