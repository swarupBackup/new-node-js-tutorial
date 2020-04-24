const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27018/mongod-exercise")
  .then(() => console.log("Connecting to Mongo DB..."))
  .catch((err) => console.log("Connection failed: ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now(),
  },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  try {
    const course = new Course({
      name: "Angular Course",
      author: "Mosh",
      tags: ["angular", "frontend"],
      isPublished: true,
    });
    const result = await course.save()
    console.log(result)
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function getCourses(){
    try{
        const courses = await Course
            .find({ isPublished: true })
            .sort({ name: 1 })
            .select({ name: 1, author: 1 })
        console.log(courses)
    } catch(err) {
        console.log('Error: ', err)
    }
}

getCourses()