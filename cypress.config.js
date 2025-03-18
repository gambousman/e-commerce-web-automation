
      const { defineConfig } = require('cypress');
      const { allureCypress } = require("allure-cypress/reporter");
      module.exports = defineConfig({
          e2e: {
              baseUrl: 'https://askomdch.com/',
              watchForFileChanges:false,
              viewportWidth:1400,
              viewportHeight: 900,
              defaultCommandTimeout:30000,
              setupNodeEvents(on, config) {
                  allureCypress(on);
              }
          }
      });
    //   afterEach(() => {
    //       cy.get('li[class=\'woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout\'] a')
    //      })  