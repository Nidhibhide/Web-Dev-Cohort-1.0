import mongoose,{Schema} from "mongoose"

const studentSchema = new Schema({
  _id: Number,
  name: String,
  age: Number,
  gender: String,
  department: String,
  marks: [Number],
  address: {
    city: String,
    country: String,
  },
  enrolled: Boolean,
});

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
