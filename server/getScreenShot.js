const puppeteer = require('puppeteer');
const constants = require('./constants');
const WIDTH = 1920;
const HEIGHT = 1080;

// take the screenshot with puppeteer
// eslint-disable-next-line require-jsdoc
async function takeScreenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: WIDTH, height: HEIGHT});
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.screenshot({path: constants.SCRN_SHOT_ROUTE});
  await page.close();
  await browser.close();
}

module.exports = {takeScreenshot};
