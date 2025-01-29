/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite 루트 HTML 파일
    "./src/**/*.{js,jsx,ts,tsx}", // src 디렉토리 내 JS/TSX 파일
  ],
  theme: {
    extend: {
      colors: {
        mainNav : 'rgb(22 , 22 , 29)',
        customGray: 'rgb(142, 142, 142)',
        customPurple: '#BCA9F5',
        sideDark: "#20232B",
        discordBrand: "#5865f2",
      }
    },
  },
  plugins: [],
};
