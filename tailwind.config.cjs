module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "primary-color": "#6067F9",
        "primary-color-o25": "#6067F940",
        "primary-color-o50": "#6067F980",
        "primary-font": "#8793FF",
        "primary-dark": "#4f55be",
        "dark-bg": "#060716",
        "secondary-bg": "#171C2F",
        "max-dark": "#040407",
        "color-borders": "#2B344D",
        "input-borders": "#171C2F",
        "input-color": "#B1BDD4",
        "white-font": "#F7F7F7",
        "label-font": "#7685A0",
      },
    },
  },
  plugins: [],
};
