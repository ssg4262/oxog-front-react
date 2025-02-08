/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite 루트 HTML 파일
    "./src/**/*.{js,jsx,ts,tsx}", // src 디렉토리 내 JS/TSX 파일
  ],
  theme: {
    extend: {
      colors: {
        mainNav: '#1E1F22',
        customGray: 'rgb(142, 142, 142)',
        customPurple: '#BCA9F5',
        sideDark: "#20232B",
        discordBrand: "#5865f2",
        mainLoginText:"#C3CBD1",
        sideItem:"#313338",
        searchBarInput:'rgb(49,49,60)',
        cardGray: "rgb(43, 45, 49)",
      }
    },
  },
  plugins: [],
};
