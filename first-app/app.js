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