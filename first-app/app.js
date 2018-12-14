// Events module -> Class: EventEmitter:
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener:
emitter.on('messageLogged', e => console.log('Listener called', e));

const log = require('./logger');
log('message');