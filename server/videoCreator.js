const videoShow = require('videoshow');
const constants = require('./constants');

// eslint-disable-next-line require-jsdoc
function createVideo(images, videoOptions) {
  videoShow(images, videoOptions)
      .save(constants.VID_ROUTE)
      .on('start', function(command) {
        console.log('ffmpeg process started:', command);
      })
      .on('error', function(err, _stdout, stderr) {
        console.error('Error:', err);
        console.error('ffmpeg stderr:', stderr);
      })
      .on('end', function(output) {
        console.error('Video created in:', output);
      });
}

module.exports = {createVideo};

