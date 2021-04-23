
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

  it('Title should be PORTFOLIO | AUNG MYO MIN', async () => {
    const title = await driver.getTitle();
    assert.strictEqual(title, 'PORTFOLIO | AUNG MYO MIN');
  });
});
