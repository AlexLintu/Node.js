// Path: https://nodejs.org/dist/latest-v10.x/docs/api/path.html
const path = require('path');

const pathObj = path.parse(__filename);

console.log(pathObj);

// OS: https://nodejs.org/dist/latest-v10.x/docs/api/os.html
const os = require('os');

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory}`);

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory}`);

// FileSystem: https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
const fs = require('fs');

// Synchronous method:
const files = fs.readdirSync('./')
console.log(files);

// Asynchronous method (recommended):
fs.readdir('./', function (err, files) {
  if (err) console.log('Error'.err);
  else console.log('Result', files);
});