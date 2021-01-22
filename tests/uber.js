describe('Uber example', function() {

    beforeEach(browser => browser.url('https://www.uber.com/fr/fr/'));

    test('Demo test uber.com', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Uber')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .assert.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    });

/*

// Exemple pour basculer sur du XPATH
.useXpath() 
   .waitForElementPresent('//button[@id="/sign-in/"]')
   .waitForElementPresent('//button[@id="/signup/"]')
// Revenir sur du CSS
.useCSS()
*/


});
