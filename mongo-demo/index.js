const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27018/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB... ", err));

const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 255
  },
  author: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network']
  },
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v, callback){
        setTimeout(()=>{
          const result = v && v.length > 0
          callback(result)
        }, 4000)
        callback()
         
      },
      message: ' A course should have at least one tag '
    }
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  isPublished: { type: Boolean, required: true },
  price: {
    type: Number,
    required: function() { return this.isPublished }
  }
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  try {
    
    const course = new Course({
      name: "Angular Course",
      author: "Mosh",
      category: "-",
      //tags: ["angular", "frontend"],
      isPublished: true,
      price: 35
    });
    const result = await course.save();
    console.log(result);
  } catch (err) {
    for(field in err.errors){
      console.log(err.errors[field].message)
    }
  }
}

async function getCourses(){
 try{
  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, author: 1 })
  console.log(courses)
 } catch (err) {
   console.log(err)
 }
}

async function updateCourse(id){
  const course = await Course.findByIdAndUpdate(id, {
    $set: {
      author: 'Jason',
      isPublished: true
    }
  }, { new: true })
  console.log(course)
}

async function removeCourse(id){
  const result = await Course.deleteOne({ _id : id })
  console.log(result)
}



createCourse()