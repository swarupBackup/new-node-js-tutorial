const express = require('express') // returns function
const app = express() // function returns app

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
]

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

app.listen(3000, ()=>{ console.log('Connected to server on port 3000...') })