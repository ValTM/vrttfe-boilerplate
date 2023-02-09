const flowbitePlugin = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'alc-primary': '#353534',
      'alc-secondary': '#121212',
      'alc-accent': '#ff470d',
      'alc-background': '#f2f2f1',
      'alc-primary-alt': '#605f5e',
      'alc-secondary-alt': '#878684',
      'alc-accent-alt': '#c5c4c2',
      'alc-background-alt': '#ffffff',
    },
    extend: {},
  },
  plugins: [flowbitePlugin],
};
