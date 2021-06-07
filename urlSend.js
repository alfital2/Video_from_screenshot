const axios = require('axios');
const fs = require('fs');

const URL = 'http://localhost:3000';
const USER_URL = 'https://google.com';

(async function run(URL, USER_URL) {
  const res = await axios.post(URL, {url: USER_URL});
  // if error Occurred with the Users entered url
  if (!res.data) {
    console.log({file: 'url is incorrect'});
  } else {
    // Notify the user that file is ready ONLY when
    // it is exists in its library! keep checking every 1 second
    const timerId = setInterval(() => {
      const isExists = fs.existsSync('./video.mp4', 'utf8');
      if (isExists) {
        console.log(JSON.stringify({file: __dirname+'/video.mp4'}));
        clearInterval(timerId);
      }
    }, 1000);
  }
})(URL, USER_URL);
