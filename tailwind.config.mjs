/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
      },
      boxShadow: {
        soft: "0 20px 50px -24px rgba(7, 12, 19, 0.9)",
      },
    },
  },
  plugins: [],
};
