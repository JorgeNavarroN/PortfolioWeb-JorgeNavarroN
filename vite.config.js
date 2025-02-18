import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/cloudinary/images": {
        target: "https://res.cloudinary.com/dl1fugaha/image/upload/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cloudinary\/images/, ""),
      },
    },
  },
});
