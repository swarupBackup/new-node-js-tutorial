const EventEmitter = require('events')
const Logger = require('./logger')

const logger = new Logger()
// Registering a listener for logging event
logger.on('logging', e => {
    console.log(e)
})

logger.log('message')