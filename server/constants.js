const routeScreenShot = './screenshot.png';
const nameVideo = 'video.mp4';
module.exports = Object.freeze({
  VID_NAME: nameVideo,
  VID_ROUTE: '../'+nameVideo,
  SCRN_SHOT_ROUTE: routeScreenShot,
  VID_OPTIONS: { // video output options
    loop: 10,
    fps: 25,
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    format: 'mp4',
    pixelFormat: 'yuv420p',
  },
  IMAGES: [
    {
      path: routeScreenShot,
    },
  ],
});
