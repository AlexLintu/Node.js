// Events module -> Class: EventEmitter:
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener:
logger.on('messageLogged', e => console.log('Listener called', e));

logger.log('Hi there! I am a friendly message!');