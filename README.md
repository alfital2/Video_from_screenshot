# Video_from_screenshot

In this project I got from the user a url - took a screenshot of the website and created a 10 seconds video from this one screenshot.

<u>Input:</u>

The input is a JSON. the only field in the JSON will be the url.
```
{
url: "website url"
}
```

<u>output:</u>

A JSON that includes a file url to a 10 seconds video of the website screenshot. 
```
{
file: "path/to/file/video.mp4"
}
```

# Quick start

Install dependencies on the root folder:

```
npm install
```

In order to prevent the need to install the videoShow globaly, after cloning this project and installing the dependenciese ,please go to :

```
node_modules -> videoshow -> lib -> index
```

Replace the code with : 

```
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
var ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

var Videoshow = require('./videoshow')
var pkg = require('../package.json')

module.exports = videoshow

function videoshow(images, options) {
  return new Videoshow(images, options)
}

videoshow.VERSION = pkg.version
videoshow.ffmpeg = ffmpeg
```


# Run 

start the server rom the server folder: 

```
node server.js
```

then, run the urlSend.js file:
```
node urlSend.js
```

# Change URL

In order to take a screenshot of a web site that you want, please change the value of the variable USER_URL in the urlSend.js to the URL you want. 
for example: 
```
const USER_URL = 'https://github.com/alfital2/Video_from_screenshot';
```

