module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#279e27',
          dark: '#1e7d1e', // Color más oscuro para el hover
        },
        secondary: {
          DEFAULT: '#ff9800',
          dark: '#e68a00', // Color más oscuro para el hover
        },
      },
    },
  },
  plugins: [],
};
