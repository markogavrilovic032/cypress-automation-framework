// npx cypress run --record --key dff68e9f-57bd-4f31-8e67-eff788bbe782

const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress11\\config', 'config', `${file}.json`);


  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return{};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: '4vjwqr',          // for Cypres dashboard 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*js",
    excludeSpecPattern: "cypress/e2e/OLD/*js",
    baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    // video: true,
    // videoCompression: 32,
    // videoUploadOnPasses: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-confing.json'
    },
    retries:{
      runMode: 0,
      openMode: 1
    },
    env: {
      first_name: "Sarah",
      wedriveruni_homepage: "https://www.webdriveruniversity.com"
    }
  },
});
 