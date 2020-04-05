const express = require('express')
const app = express()
const Joi = require('joi')
const logger = require('./logger')
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

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
    res.render('index',{title: 'My Express App', message: "Bow"})
})


app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The requested course was not found')
    res.send(course)
})

app.post('/api/courses/', (req, res) => {
    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const course = { 
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})


app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The requested course was not found')
    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    course.name = req.body.name
    res.send(course)
})


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The requested course was not found')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

//PORT

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}...`))


validateCourse = course => {
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

