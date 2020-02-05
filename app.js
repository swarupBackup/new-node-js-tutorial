const EventEmitter = require('events')
const emitter = new EventEmitter()

// Registering a Listener for messageLogged
emitter.on('messageLogged', e => {
    console.log(e)
})

emitter.on('logging', e => {
    console.log('message: ' + e)
})

// Raising messageLogged
emitter.emit('messageLogged', {id: 1, url: 'https://'})

// Raising logging
emitter.emit('logging', "This is a message")