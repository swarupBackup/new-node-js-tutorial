const express = require('express') // returns function
const app = express() // function returns app
const Joi = require('joi')
app.use(express.json())

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

app.listen(3000, ()=>{ console.log('Connected to server on port 3000...') })