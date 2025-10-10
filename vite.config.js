import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//  Load environment variables (VITE_BACKEND_URL)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "https://quickcart-backend-6hka.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
