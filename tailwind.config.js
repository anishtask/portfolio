/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#050B18",
          soft: "#0B1730",
        },
        blue: {
          DEFAULT: "#1683FF",
          bright: "#2F9BFF",
        },
        surface: "#F7F9FC",
        ink: "#111827",
        muted: "#667085",
        line: "#E6E9F2",
      },
      fontFamily: {
        display: ["'Sora'", "'Inter'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -14px rgba(5,11,24,.16)",
        cardHover: "0 24px 48px -18px rgba(5,11,24,.24)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .7s ease forwards",
        scrollX: "scrollX 28s linear infinite",
      },
    },
  },
  plugins: [],
};
