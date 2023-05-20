/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-header-gradient':
          'radial-gradient(ellipse 50% 100% at 50% -10%, rgb(119 138 232 / 50%), rgb(119 138 232 / 0%))',
        'radial-body-gradient':
          'radial-gradient(ellipse 70% 50% at 50% 50%, rgb(119 138 232 / 50%), rgb(119 138 232 / 0%))',
      },
    },
  },
  plugins: [],
}
