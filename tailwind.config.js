// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Base canvas
        bg: "#FEFCFD", // White

        // Card & section surfaces
        surface: "#BFCDE0", // Pale Sky

        // Primary readable text
        text: "#000505", // Black

        // Accent / CTA / mood pill
        accent: "#3B3355", // Space Indigo

        // Secondary / informational text
        weather: "#5D5D81", // Dusty Grape

        box: "#9fb9d6ff",
      },
    },
  },
  plugins: [],
};
