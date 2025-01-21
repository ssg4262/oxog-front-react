/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite 루트 HTML 파일
    "./src/**/*.{js,jsx,ts,tsx}", // src 디렉토리 내 JS/TSX 파일
  ],
  theme: {
    extend: {
      colors: {
        mainNav : 'rgb(22 , 22 , 29)'
      }
    },
  },
  plugins: [],
};
