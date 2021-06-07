/* eslint-disable require-jsdoc */
const scrnsht = require('./getScreenShot');
const vidCreator = require('./videoCreator');
const fetch = require('node-fetch');
const constants = require('./constants');
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());


const PORT = 3000;
const HOST = '0.0.0.0';

// check if the url is valid before running puppeteer tools
async function validUrl(url) {
  return await fetch(url)
      .then((response) => response.status)
      .catch((err) => err.code) == 200;
}

// process the url and create the video
async function run(url, images, videoOptions) {
  const urlStatus = await validUrl(url);
  if (urlStatus) {
    await scrnsht.takeScreenshot(url);
    vidCreator.createVideo(images, videoOptions);
  }
  return urlStatus;
}

app.post('/', async (req, res) => {
  console.log('checking :', req.body.url);
  // Remove video if currently in the library. 
  if (fs.existsSync(constants.VID_ROUTE, 'utf8')) {
    fs.unlinkSync(constants.VID_ROUTE, 'utf8');
  }
  const respone=await run(req.body.url, constants.IMAGES, constants.VID_OPTIONS)
      .then((res) => res)
      .catch((err) => err);
  const dir = require('path').resolve(__dirname, '..')+'/';
  res.send({file: respone ? dir+constants.VID_NAME : 'error: url Incorrect.'});
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
