/* eslint-disable no-undef */
// ============================================================================
// 👑 PROJECT NEXUS — OS GENESIS EDITION (STANDALONE AGENCY RUNTIME V20.95)
// Súbor: vite.config.js (V uzle nexus-agency-monorepo_7.2)
// Port: 5172 // Status: 100% AUTONÓMNY RUNTIME // AUTO-OPEN: TRUE
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
      "@agency": path.resolve(__dirname, "./apps/agency/src"),
      "@shared": path.resolve(__dirname, "./shared/src"),
      "@settings": path.resolve(__dirname, "./shared/src"),
      "@": path.resolve(__dirname, "./apps/agency/src")
    }
  },
  server: {
    port: 5172,
    strictPort: true,
    host: true,
    open: true // ⚡ AUTOMATICKY OTVORÍ PREHLIADAČ PRI ŠTARTE SERVERA
  },
  build: {
    outDir: path.resolve(__dirname, "./dist"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000
  }
});