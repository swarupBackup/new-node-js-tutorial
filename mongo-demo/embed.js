const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{console.log('Connected to DB...')})
    .catch((err)=>{console.error("Error: ", err)})


const authorSchema = new mongoose.Schema({
    name: String,
    bio: String,
    website: String
})

const Author = mongoose.model('Author', authorSchema)

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: authorSchema,
        required: true
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
    const course = new Course({
        name,
        author
    })
    const result = await course.save()
    console.log(result)
}

async function listCourses(){
    const courses = await Course.find()
    console.log(courses)
}

async function updateAuthor(courseId){
    const course = await Course.findById(courseId)
    course.author.name = "Swarup"
    course.save()
}

//createCourse('Node Course', new Author({ name: 'Swarup Hegde' }))

//updateAuthor('5ec29909eac38731af3e0022')

listCourses()