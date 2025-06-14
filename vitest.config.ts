/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Pour simuler un navigateur
    exclude: ["e2e", "node_modules"],
  },
});
