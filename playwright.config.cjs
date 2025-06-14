// playwright.config.cjs
const { defineConfig } = require("@playwright/test");

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = defineConfig({
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
});
