const logger = require('./logger') 
// best practice to set loading variables 
//to constant as we do not want to override 

//We are no longer exporting an object
//logger.log('Hello world')

// Can directly write like this

logger('Hello World')
