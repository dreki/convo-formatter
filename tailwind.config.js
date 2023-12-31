/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Everything is in `src`
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  safelist: [
    'chat',
    'chat-start',
    'chat-end',
    'chat-bubble-primary',
    'chat-bubble-secondary',
  ]
}
