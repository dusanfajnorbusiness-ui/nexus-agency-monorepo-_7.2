/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (STANDALONE AGENCY RUNTIME V20.95)
// Súbor: apps/agency/vite.config.js (V uzle nexus-agency-monorepo_7.2)
// Port: 5172 // Status: 100% AUTONÓMNY RUNTIME // ZERO 7.1 DEPENDENCY
// ============================================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@agency": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../../shared"),
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    port: 5172,
    strictPort: true,
    host: true
  },
  build: {
    outDir: path.resolve(__dirname, "../../dist"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000
  }
});