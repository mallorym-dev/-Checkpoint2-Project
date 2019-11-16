var math = {}
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/Automation-Basics/build/')
    },
    after: browser => {
        browser.end()
    },
    'Test Evens and Odds Title': browser => {
        browser
            .waitForElementVisible('(//h4)[1]')
            .assert.valueContains('(//h4)[1]')
            .pause(5000)
    },
    'Test Evens and Odds': browser => {
        browser
            .clearValue('//input[@class="inputLine"][1]')
            .setValue('//input[@class="inputLine"][1]', ['5,8,4,7', browser.Keys.ENTER])
            .waitForElementVisible('//input[@class="inputLine"][1]')
            .assert.containsText('//input[@class="inputLine"][1]', '5,8,4,7')
            .click('//button[@class="confirmationButton"][1]')
            .pause(5000)
    },
    'Test Filter Object Title': browser => {
        browser
            .waitForElementVisible('(//h4)[2]')
            .assert.valueContains('(//h4)[2]')
            .pause(5000)
    },
    'Test Filter Object': browser => {
        browser
            .clearValue('//input[@name="objectFilterInput"]')
            .setValue('//input[@name="objectFilterInput"]', ['CEO', browser.Keys.ENTER])
            .waitForElementVisible('//input[@name="objectFilterInput"]')
            .assert.containsText('//input[@name="objectFilterInput"]', 'CEO')
            .click('//button[@name="objectFilterButton"]')
            .pause(5000)
    },
    'Test Filter String Title': browser => {
        browser
            .waitForElementVisible('(//h4)[3]')
            .assert.valueContains('(//h4)[3]')
            .pause(5000)
    },

    'Test Filter String': browser => {
        browser
            .clearValue('//input[@id="nameFilterInput"]')
            .setValue('//input[@id="nameFilterInput"]', ['James', browser.Keys.ENTER])
            .waitForElementVisible('//input[@id="nameFilterInput"]')
            .assert.containsText('//input[@id="nameFilterInput"]', 'James')
            .click('//button[@id="nameFilterButton"]')
            .pause(5000)
    },
    'Test Palindrome Title': browser => {
        browser
            .waitForElementVisible('(//h4)[4]')
            .assert.valueContains('(//h4)[4]')
            .pause(5000)
    },
    'Test Palindrome': browser => {
        browser
            .clearValue('//input[@name="palindromeInput"]')
            .setValue('//input[@name="palindromeInput"]', ['madam', browser.Keys.ENTER])
            .waitForElementVisible('//input[@name="palindromeInput"]')
            .assert.containsText('//input[@name="palindromeInput"]', 'madam')
            .click('//button[@name="palindromeButton"]')
            .pause(5000)
    },
    'Test Sum Title': browser => {
        browser
            .waitForElementVisible('(//h4)[5]')
            .assert.valueContains('(//h4)[5]')
            .pause(5000)
    },
    'Test Sum': browser => {
        browser
            .clearValue('//input[@name="sumInput1"]')
            .setValue('//input[@name="sumInput1"]', ['8', browser.Keys.ENTER])
            .waitForElementVisible('//input[@name="sumInput1"]')
            .assert.containsText('//input[@name="sumInput1"]', 'madam')
            .pause(5000)
            .clearValue('//input[@name="sumInput2"]')
            .setValue('//input[@name="sumInput2"]', ['9', browser.Keys.ENTER])
            .waitForElementVisible('//input[@name="sumInput2"]')
            .assert.containsText('//input[@name="sumInput2"]', '9')
            .click('//button[@name="sumButton"]')
            .pause(5000)
    }
}