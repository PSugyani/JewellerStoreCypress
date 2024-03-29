const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.birkbecksjewellers.com.au/',
    setupNodeEvents(on, config) {
     
      // implement node event listeners here
    },
    "compilerOptions": {
      "types": ["cypress", "cypress-xpath"]
    },
    "type": "chrome",
    "request": "attach",
    "name": "Attach to Cypress Chrome",
    "port": 9222,
    "urlFilter": "http://localhost*",
    "webRoot": "${workspaceFolder}",
    "sourceMaps": true,
    "skipFiles": [
    "cypress_runner.js",
    ],
  },
});
