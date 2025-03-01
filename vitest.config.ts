import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Use jsdom for browser-like environment
    setupFiles: "./src/setupTests.ts", // Load global setup
  },
});
