/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
          dark: "#111827",
          muted: "#64748b",
          cream: "#fff7ed",
        },
      },
      boxShadow: {
        card: "0 16px 40px rgba(15, 23, 42, 0.10)",
        filter: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
