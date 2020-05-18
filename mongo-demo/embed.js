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
    authors: {
        type: [authorSchema],
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

async function createCourse(name, authors){
    const course = new Course({
        name,
        authors
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

async function addAuthor(courseId, author){
    const course = await Course.findById(courseId)
    course.authors.push(author)
    course.save()
}

async function removeAuthor(courseId, authorId){
    const course = await Course.findById(courseId)
    const author = course.authors.id(authorId)
    author.remove()
    course.save()
}

// createCourse('Node Course', [
//     new Author({ name: 'Swarup Hegde' }),
//     new Author({ name: 'Prabha Hegde' }),
// ])

//updateAuthor('5ec29909eac38731af3e0022')

listCourses()

//addAuthor('5ec2bfce40ebdd45d75093b6', new Author({ name: 'Subray Hegde' }))