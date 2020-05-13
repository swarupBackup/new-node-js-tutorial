const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => { console.log('Connected to DB...') })
    .catch((err) => { console.error('Could not connect to DB...', err) })


    const Author = mongoose.model('Author', new mongoose.Schema({
        name: String,
        bio: String,
        website: String
    }))

    const Course = mongoose.model('Course', new mongoose.Schema({
        name: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author'
        }
    }))

    async function createAuthor(name, bio, website){
        const author = new Author({
            name, 
            bio,
            website
        })

        const result = await author.save()
        console.log(result)
    }

    async function createCourse(name, author){
        const course = new Course({ name, author })
        const result = await course.save()
        console.log(result)
    }

    async function listCourses(){
        const courses = await Course
            .find()
            .select('name')
        console.log(courses)
    }

    //createAuthor('Swarup', 'My bio', 'My website')
    createCourse('Node Course','5eb9408d0a99c67524868673')

    //listCourses()