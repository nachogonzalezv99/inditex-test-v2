const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "src/test/e2e/**/*.spec.{js,jsx,ts,tsx}",
  },
});
