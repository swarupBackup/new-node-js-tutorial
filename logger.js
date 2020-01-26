url = 'http://mylogger.io/log';

function log(message){
    //send an HTTP request
    console.log(message)
}

//module.exports.log = log; 
// Don't necessartily need an object, just need the function
module.exports = log
//module.exports.endPoint = url;