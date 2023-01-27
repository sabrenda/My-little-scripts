const fs = require('fs').promises
const path = require('path');

/* this script changes the name of all files on numbers
in the current folder where the script is located.
*/
//dangerous! will rename everything ruthlessly and mercilessly!

fs.readdir(path.join(__dirname))
  .then(data =>
    data.forEach((el, i) =>
      fs.rename(`${el}`, path.join(__dirname) + '/' + i)))
