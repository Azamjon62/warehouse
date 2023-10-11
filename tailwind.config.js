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
        primaryBlue: "#0075FF",
        sidebarActive: "#1A1F37",
        grayish: "#A0AEC0",
      },
      fontFamily: {
        jakartaSans: "Plus Jakarta Sans",
      },
      backgroundImage: {
        loginBg: 'url("./src/assets/images/loginBg.png")',
        loginGradient:
          "linear-gradient(159deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)",
        inputBg:
          "linear-gradient( 117deg, rgba(255, 255, 255, 0) -3.91%, rgba(255, 255, 255, 0.04) 75.27%)",
        inputBorderBg:
          "linear-gradient(to bottom left, transparent, rgb(88, 85, 134), transparent, rgb(88, 85, 134))",
      },
    },
  },
  plugins: [],
};
