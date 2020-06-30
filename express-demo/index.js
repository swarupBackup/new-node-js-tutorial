const express = require('express') // returns function
const app = express() // function returns app
const Joi = require('joi')
const logger = require('./middleware/logger')
const config = require('config')

app.use(express.json())
app.use(logger)

console.log(`Application name: ${config.get('name')}`)


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]



// Get routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Requested course not found!')
    res.send(course)
})

// Post route

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema)
    if (result.error) return res.status(400).send(result.error.details[0].message)
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

// Put route
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Requested course not found!')
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema)
    if (result.error) return res.status(400).send(request.error.details[0].message)
    course.name = req.body.name
    res.send(workshops)
})

// Delete route
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(course => course.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('Requested course not found!')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(courses)
})

app.listen(3000, ()=>{ console.log('Connected to server on port 3000...') })