const EventEmitter = require('events');
const emitter = new EventEmitter();

const url = 'http://mylogger.io/log';

function log(message) {
  // Send an HTTP request
  console.log(message);

}

module.export = log;