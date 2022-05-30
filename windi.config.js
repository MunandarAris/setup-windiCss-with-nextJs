import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{js,jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
});
