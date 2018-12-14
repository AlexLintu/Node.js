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

// Synchronous method of FileSystem:
const files = fs.readdirSync('./')
console.log(files);

// Asynchronous method (recommended) of FileSystem:
fs.readdir('./', function (err, files) {
  if (err) console.log('Error'.err);
  else console.log('Result', files);
});

// Events module -> Class: EventEmitter:
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener:
emitter.on('messageLogged', e => console.log('Listener called', e));

// Raise an event:
emitter.emit('messageLogged', { id: 1, url: 'http://' });