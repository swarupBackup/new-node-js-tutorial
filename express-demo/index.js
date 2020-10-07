const express = require('express')
const Joi = require('joi')
const app = express()

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id) )
    if(!courses) return res.status(404).send('Requested course was not found')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).require()
    }
    const result = Joi.validate(schema, req.body)
    if(result.error) return res.status(400).send(result.error.details[0].message)
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

const port = process.env.PORT || 3000

app.listen(3000, () => { console.log(`Listening on port ${port}...`) })