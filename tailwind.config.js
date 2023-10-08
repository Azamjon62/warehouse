/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        "dark-blue": "rgba(6, 11, 38, 0.94)",
        brownish: "rgba(26, 31, 55, 0.00)",
        iconBg: "#1A1F37",
        "iconBg-active": "#0075FF",
        sidebarActive: "#1A1F37",
      },
      fontFamily: {
        jakartaSans: "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
};
