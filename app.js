// How to get information about path
/** 
const path = require('path')

var pathObj = path.parse(__filename);
console.log(pathObj)
*/


// How to get information about current OS

/*
const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()


// Template String
console.log(`Total memory: ${totalMemory}`)
console.log(`Free memory: ${freeMemory}`)

*/

// File systems

const fs = require('fs')

//const files = fs.readdirSync('./')
//console.log(`Files: ${files}`)

fs.readdir('$', function(err, files){
    if (err) console.log('Error', err)
    else console.log(`Files: ${files}`)
})


