// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-in-delay': {
        '0%': { opacity: '0' },
        '50%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: {
      'fade-in': 'fade-in 1s ease-out',
      'fade-in-delay': 'fade-in-delay 2s ease-out',
    },
  },
};
export const plugins = [];
