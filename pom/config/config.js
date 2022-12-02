// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
    use: {
      // All requests we send go to this API endpoint.
      baseURL: 'https://petstore.swagger.io/v2',
      extraHTTPHeaders: {
        // We set this header per GitHub guidelines.
        'Accept': 'application/json',
        // Add authorization token to all requests.
        // Assuming personal access token available in the environment.
        //'Authorization': `token ${process.env.API_TOKEN}`,
      },
    }
  };
  module.exports = config;