const express = require('express')
const Joi = require('joi')
const app = express()
app.use(express.json())

// List of genres

const genres = [
    {id: 1, genre: 'horror'},
    {id: 2, genre: 'comedy'},
    {id: 3, genre: 'action'}
]

app.get('/', (req, res) => {
    res.send('Welcome to Vidly')
})

app.get('/api/genres', (req, res) => {
    res.send(genres)
})

app.get('/api/genres/:id', (res, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if(!genre) return res.status(404).send('The requested genre was not found')
    res.send(genre)
})

app.post('/api/genres', (res, req) => {
    const { error } = genreValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    }
    genres.push(genre)
    res.send(genres)
})

app.put('/api/genres/:id', (res, req) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if(!genre) return res.status(404).send('The requested genre was not found')
    const { error } = genreValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    genre.genre = req.body.genre
    res.send(genres)
})

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if(!genre) return res.status(404).send('The requested genre was not found')
    const index = genres.indexOf(genre)
    genres.splice(index, 1)
    res.send(genres)
})


function genreValidation(genre){
    const schema = {
        genre: Joi.string().min(4).required()
    }
    return Joi.validate(schema, genre)
}