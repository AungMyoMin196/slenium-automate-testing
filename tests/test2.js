/**
 * @see https://www.selenium.dev/selenium/docs/api/javascript/index.html
 */
require('chromedriver');
const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');
let driver;

describe('SeleniumChromeTest', () => {
  before(async () => {
    driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://aungmyomin196.github.io/portfolio/');
  });

  after(() => {
    return driver.quit();
  });

  it('Footer should be © 2021 Aung Myo Min', async () => {
    const footerText = await driver.findElement(By.css('#footer p')).getText();
    assert.strictEqual(footerText, '© 2021 Aung Myo Min');
  });
});
