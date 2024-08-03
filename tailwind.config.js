/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: { colors: {
      'primary-bg': 'var(--primary-bg)',
      'secondary-bg': 'var(--secondary-bg)',
      'text-primary': 'var(--text-primary)',
      'text-secondary': 'var(--text-secondary)',
    },},
  },
  plugins: [
    require('daisyui'),
  ],
};
