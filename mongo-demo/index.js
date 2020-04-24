const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27018/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB... ", err));

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
    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function getCourses(){
 try{
  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .count()
  console.log(courses)
 } catch (err) {
   console.log(err)
 }
}

getCourses()