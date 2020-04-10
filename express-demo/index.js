const express = require('express')
const app = express()
const courses = require('./routes/courses')
const home = require('./routes/home')
const Joi = require('joi')
const logger = require('./middleware/logger')
const auth = require('./authenticate')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')

app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(logger) 
app.use(auth)
app.use(helmet())
app.use('/api/courses', courses)
app.use('/', home)

// Configuration
console.log('Application name: ' + config.get('name'))
console.log('Mail server: ' + config.get('mail.host'))
console.log('Mail server password: ' + config.get('mail.password'))
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`)


if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    console.log('Morgan enabled...')
}

//PORT

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}...`))


validateCourse = course => {
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

