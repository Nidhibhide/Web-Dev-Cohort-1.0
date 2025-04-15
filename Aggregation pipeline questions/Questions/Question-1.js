//Find all students from the "Computer Science" department.
import StudentModel from "./studentModel";
export const question1 = async (req, res) => {
  try {
    const studentsList = await StudentModel.aggregate([
      {
        $match: {
          department: "Computer Science",
        },
      },
    ]);
    return res.
  } catch (error) {}
};
